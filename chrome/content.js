class Player {
  constructor(name) {
    this.name = name
    this.deck = new Map()
  }

  gain_card(card, count) {
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


console.log("Dominion Helper")
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // Setup
  var log_lines = document.getElementsByClassName("log-line")

  var first_player = ""
  var ix = 0

  var players = new Map()

  // Parse initial game state
  for (ix = 0; ix<log_lines.length; ix++) {
    const line = log_lines[ix].innerText

    const re = new RegExp("([a-zA-Z]) starts with ([0-9]|a|an) ([a-zA-Z ]*)")

    const match = line.match(re)

    if (match != null) {
      if (!players.has(match[1])) {
        players.set(match[1], new Player(match[1]))
      }
      players.get(match[1]).gain_card(match[3], match[2])
    }

    // console.log(line)
    // console.log(match)

    const first_turn_re = new RegExp("Turn 1 - ([a-zA-Z0-9 ]+)")
    const ftmatch = line.match(first_turn_re)
    if (ftmatch != null) {
      first_player = ftmatch[1]
      break
    }
    // console.log(line)

  }

  // console.log(players)

  // Parse the rest of the log
  for (; ix<log_lines.length; ix++) {
    const line = log_lines[ix].innerText

    const gains_re = new RegExp("([a-zA-Z]) .*gains ([0-9]+|a|an) ([a-zA-Z ]*)")

    const match = line.match(gains_re)
    if (match != null) {
      players.get(match[1]).gain_card(match[3], match[2])
    }

  }

  console.log(players)
  console.log(flatten_players(players))

  // Return data to popup

  sendResponse({first: first_player,
    player_list: flatten_players(players)})


})
