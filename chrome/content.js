var playerColors = {};
var cardColors = {};

class Player {
  constructor(name) {
    this.name = name
    this.deck = new Map()
  }

  gain_card(card, count, color) {
    if (count == "a" || count == "an") {
      count = 1
    } else {
      count = parseInt(count)
    }

    if (this.deck.has(card)) {
      this.deck.set(card, this.deck.get(card) + count)
    } else {
      this.deck.set(card, count)
    }
    cardColors[card] = color
  }

  trash_card(card, count) {
    if (this.deck.has(card)) {
      this.deck.set(card, this.deck.get(card) - count)
    }
  }

  get_deck_count() {
    total = 0
    for (const [card, count] of this.deck) {
      total = total + count
    }
    return total
  }

  get_deck() {
    var result = {}
    for (const [card, count] of this.deck)
      result[card] = count
    return result
  }

}


function flatten_players(player_map) {
  var result = {}
  for (const [key, value] of player_map)
    result[key] = value.get_deck()

  return result
}

function stringContains(str, search) {
  return str.indexOf(search) != -1;
}

function extractCardsFromSpans(log_line) {
  // Checks each span in the log line
  // If the span names a card, parsed out the card name and quantity
  // Returns the object { player: playerName, cards: [{card: card1, count: count1}, ...]}
  let results = [];
  // First, grab the player name
  const playerName = log_line.innerText[0];
  // Check each span
  for (child of log_line.children[0].children) {
    if (child.nodeName == "SPAN" && child.attributes.onmousedown) {
      // Grab the card name
      const mousedown = child.attributes.onmousedown.value;
      const mousedownSections = mousedown.split("'");
      if (mousedownSections[0] != "publicStudyRequest(event, ") continue;
      const cardName = mousedownSections[1];

      // Determine the count
      const countText = child.innerText.split(' ')[0];
      let number = Number(countText);
      if (!number) number = 1;

      const cardColor = child.firstChild.style.getPropertyValue("color");
      console.log("DH: cardColor = ", cardColor);

      // Add it to the results array
      results.push({card: cardName, count: number, color:cardColor});
    }
  }

  return {player: playerName, cards: results};
}


console.log("Dominion Helper")
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // Setup
  var log_lines = document.getElementsByClassName("log-line")

  var first_player = ""
  var ix = 0

  var players = new Map()

  // Parse initial game state
  for (ix = 0; ix<log_lines.length; ix++) {
    const line = log_lines[ix];

    const results = extractCardsFromSpans(log_lines[ix]);

    if (stringContains(line.innerText, "starts with") && results.cards.length != 0) {
      let pname = results.player;
      if (!players.has(pname)) {
        players.set(pname, new Player(pname));
        playerColors[pname] = line.firstChild.firstChild.style.getPropertyValue("color");
      }
      for (let c of results.cards)
        players.get(pname).gain_card(c.card, c.count, c.color);
    }

    const first_turn_re = new RegExp("Turn 1 - ([a-zA-Z0-9 ]+)")
    const ftmatch = line.innerText.match(first_turn_re)
    if (ftmatch != null) {
      first_player = ftmatch[1]
      break
    }

  }

  // Parse the rest of the log
  let lastCardPlayed = "";
  for (; ix<log_lines.length; ix++) {
    const line = log_lines[ix];

    if (stringContains(line.innerText, "plays")) {
      const r = extractCardsFromSpans(line);
      if (r.cards.length != 0)
        lastCardPlayed = r.cards[0].card;
    }

    if (stringContains(line.innerText, "gains")) {
      const results = extractCardsFromSpans(line);
      if (results.cards.length == 0) continue;
      for (let c of results.cards)
        players.get(results.player).gain_card(c.card, c.count, c.color);
    }

    if (stringContains(line.innerText, "trashes")) {
      const results = extractCardsFromSpans(line);
      if (lastCardPlayed == "Lurker") continue;
      console.log("DH: last card played was", lastCardPlayed);
      if (results.cards.length == 0) continue;
      for (let c of results.cards)
        players.get(results.player).trash_card(c.card, c.count);
    }
  }

  console.log(cardColors);

  sendResponse({first: first_player, pColors: playerColors,
                cColors: cardColors, player_list: flatten_players(players)})

})


// // Testing out live response to card events
// var observer = new MutationObserver(function(mutations) {
//   for(let mutation of mutations) {
//     for(let addedNode of mutation.addedNodes) {
//       if (addedNode.parentNode.className == "game-log" && addedNode.nodeName == "DIV"
//           && isGainsString(addedNode.innerHTML))
//         console.log("DOMINION HELPER", addedNode.innerText);
//     }
//   }
// });

// observer.observe(document.body, {childList: true, subtree: true});
