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
    if (color)
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

function stringContainsAny(str, searches) {
  for (s of searches) {
    if (stringContains(str, s)) return true;
  }
  return false;
}

function extractCardsFromSpans(log_line) {
  // Checks each span in the log line
  // If the span names a card, parsed out the card name and quantity
  // Returns the object { player: playerName, cards: [{card: card1, count: count1}, ...]}
  let results = [];
  // First, grab the player name
  if (!log_line) return {};
  if (!log_line.innerText) return {};
  if (!log_line.children) return {};
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

      // Add it to the results array
      results.push({card: cardName, count: number, color:cardColor});
    }
  }

  return {player: playerName, cards: results};
}



function isBoonOrHex(cardName) {
  const BoonsAndHexes = [
    "The Earth's Gift",
    "The Field's Gift",
    "The Flame's Gift",
    "The Forest's Gift",
    "The Moon's Gift",
    "The Mountain's Gift",
    "The River's Gift",
    "The Sea's Gift",
    "The Sky's Gift",
    "The Sun's Gift",
    "The Swamp's Gift",
    "The Wind's Gift",
    "Bad Omens",
    "Delusion",
    "Envy",
    "Famine",
    "Fear",
    "Greed",
    "Haunting",
    "Locusts",
    "Misery",
    "Plague",
    "Poverty",
    "War",
    "Deluded",
    "Envious",
    "Lost in the Woods",
    "Miserable",
    "Twice Miserable"
  ];
  return (BoonsAndHexes.indexOf(cardName) != -1);
}


function isKingdomTrasher(cardName) {
  const kTrashers = ["Lurker", "Gladiator", "Salt The Earth"];
  return (kTrashers.indexOf(cardName) != -1);
}


function isKingdomExiler(cardName) {
  const kExilers = ["Camel Train", "Transport", "Invest", "Enclave", "Way Of The Camel"];
  return (kExilers.indexOf(cardName) != -1);
}


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
  let lastCardPlayedOrBought = "";
  for (; ix<log_lines.length; ix++) {
    const line = log_lines[ix];

    if (stringContainsAny(line.innerText, ["plays", "buys"])) {
      const r = extractCardsFromSpans(line);
      if (r.cards.length != 0)
        lastCardPlayedOrBought = r.cards[r.cards.length-1].card;
    }

    if (stringContainsAny(line.innerText, ["gains", "receives"])) {
      const results = extractCardsFromSpans(line);
      if (results.cards.length == 0) continue;
      for (const c of results.cards) {
        if (isBoonOrHex(c.card)) continue;
        players.get(results.player).gain_card(c.card, c.count, c.color);
      }
    }

    if (stringContainsAny(line.innerText, ["trashes", "returns"])) {
      const results = extractCardsFromSpans(line);
      if (results.cards.length == 0) continue;
      for (const c of results.cards) {
        if (!isKingdomTrasher(lastCardPlayedOrBought))
          players.get(results.player).trash_card(c.card, c.count);
        if (c.card == "Fortress")
          players.get(results.player).gain_card(c.card, c.count);
      }
    }


    if (stringContains(line.innerText, "exiles")) {
      const results = extractCardsFromSpans(line);
      if (results.cards.length == 0) continue;
      for (const c of results.cards) {
        if (!isKingdomExiler(lastCardPlayedOrBought)) continue;
        players.get(results.player).gain_card(c.card, c.count, c.color);
      }
    }

  }

  const firstPlayerMessage = first_player ? first_player + " went first" : "The game has not yet started"

  sendResponse({first: firstPlayerMessage, pColors: playerColors,
                cColors: cardColors, player_list: flatten_players(players)})

})


// // Testing out live response to card events
// var observer = new MutationObserver(function(mutations) {
//   for(let mutation of mutations) {
//     for(let addedNode of mutation.addedNodes) {
//       if (addedNode.parentNode.className == "game-log" && addedNode.nodeName == "DIV"
//           && isGainsString(addedNode.innerHTML))
//     }
//   }
// });

// observer.observe(document.body, {childList: true, subtree: true});

