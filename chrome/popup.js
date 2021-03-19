  function onclick() {
    chrome.tabs.query({currentWindow: true, active: true},
      function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, 'hi', displayDecks)
      })
  }

  function displayDecks(resp) {
    // Cleanup
    oldfp = document.getElementById("first player")
    if (oldfp != null)
      oldfp.remove()

    olddecks = document.getElementById("decks")
    if (olddecks != null)
      olddecks.remove()

    // First player
    const fp_display = document.createElement('p')
    fp_display.textContent = resp.first + " went first"
    fp_display.id = "first player"
    document.body.appendChild(fp_display)

    // Deck display
    const div = document.createElement('div')
    div.id = "decks"
    console.log(resp.player_map)
    for (const [player_name, player] of resp.player_map) {
      // Set up the table
      const table = document.createElement('table')
      const header = document.createElement('tr')
      const th = document.createElement('th')
      th.textContent = player_name
      th.setAttribute("rowspan", "2")
      header.appendChild(th)
      table.appendChild(header)

      // ...
      div.appendChild(table)

    }

    document.body.appendChild(div)

  }

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('button').addEventListener('click',
    onclick, false)




}, false)
