function onclick() {
  chrome.tabs.query({currentWindow: true, active: true},
    function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, 'hi', displayDecks);
    })
}

function displayDecks(resp) {
  // Cleanup
  oldfp = document.getElementById("first player");
  if (oldfp != null)
    oldfp.remove();

  olddecks = document.getElementById("decks");
  if (olddecks != null)
    olddecks.remove();

  // First player
  const fp_display = document.createElement('p');
  fp_display.textContent = resp.first + " went first";
  fp_display.id = "first player";
  document.body.appendChild(fp_display);

  // Deck display
  const div = document.createElement('div');
  div.id = "decks";
  console.log(resp.player_list);
  let i=0;
  for (const player_name in resp.player_list) {
    const table = document.createElement('table');
    table.id = "table" + i++;
    player = resp.player_list[player_name];
    // Set up the table
    const header = document.createElement('tr');
    const th = document.createElement('th');
    th.textContent = player_name;
    th.setAttribute("colspan", "2");
    th.style.setProperty("color", resp.pColors[player_name]);
    header.appendChild(th);
    table.appendChild(header);

    // Table rows
    for (const card in player) {
      if (player[card] == 0) continue;
      const tr = document.createElement('tr');
      const td1 = document.createElement('td');
      const td2 = document.createElement('td');
      td1.textContent = card;
      td2.textContent = player[card].toString();
      tr.style.setProperty("background-color", resp.cColors[card]);
      tr.appendChild(td1);
      tr.appendChild(td2);
      table.appendChild(tr);
    }
    console.log(resp.cColors)


    // ...
    div.appendChild(table);

  }

  document.body.appendChild(div);

}

document.addEventListener('DOMContentLoaded', onclick, false);

// onclick();
