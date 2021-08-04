var cardCosts = {
  "Back": 0,
  "Curse": 0,
  "Copper": 0,
  "Silver": 3,
  "Gold": 6,
  "Estate": 2,
  "Duchy": 5,
  "Province": 8,
  "Artisan": 6,
  "Bandit": 5,
  "Bureaucrat": 4,
  "Cellar": 2,
  "Chapel": 2,
  "Council Room": 5,
  "Festival": 5,
  "Gardens": 4,
  "Harbinger": 3,
  "Laboratory": 5,
  "Library": 5,
  "Market": 5,
  "Merchant": 3,
  "Militia": 4,
  "Mine": 5,
  "Moat": 2,
  "Moneylender": 4,
  "Poacher": 4,
  "Remodel": 4,
  "Sentry": 5,
  "Smithy": 4,
  "Throne Room": 4,
  "Vassal": 3,
  "Village": 3,
  "Witch": 5,
  "Workshop": 3,
  "Courtyard": 2,
  "Conspirator": 4,
  "Courtier": 5,
  "Baron": 4,
  "Bridge": 4,
  "Diplomat": 4,
  "Duke": 5,
  "Harem": 6,
  "Nobles": 6,
  "Ironworks": 4,
  "Lurker": 2,
  "Masquerade": 3,
  "Mill": 4,
  "Mining Village": 4,
  "Minion": 5,
  "Patrol": 5,
  "Pawn": 2,
  "Replace": 5,
  "Secret Passage": 4,
  "Shanty Town": 3,
  "Steward": 3,
  "Swindler": 3,
  "Torturer": 5,
  "Trading Post": 5,
  "Upgrade": 5,
  "Wishing Well": 3,
  "Ambassador": 3,
  "Bazaar": 5,
  "Caravan": 4,
  "Cutpurse": 4,
  "Embargo": 2,
  "Explorer": 5,
  "Fishing Village": 3,
  "Ghost Ship": 5,
  "Haven": 2,
  "Island": 4,
  "Lighthouse": 2,
  "Lookout": 3,
  "Merchant Ship": 5,
  "Native Village": 2,
  "Navigator": 4,
  "Outpost": 5,
  "Pearl Diver": 2,
  "Pirate Ship": 4,
  "Salvager": 4,
  "Sea Hag": 4,
  "Smugglers": 3,
  "Tactician": 5,
  "Treasure Map": 4,
  "Treasury": 5,
  "Warehouse": 3,
  "Wharf": 5,
  "Alchemist": 3,
  "Apothecary": 2,
  "Apprentice": 5,
  "Familiar": 3,
  "Golem": 4,
  "Herbalist": 2,
  "Philosophers Stone": 3,
  "Possession": 6,
  "Potion": 4,
  "Scrying Pool": 2,
  "Transmute": 1,
  "University": 2,
  "Vineyard": 1,
  "Bank": 7,
  "Bishop": 4,
  "Colony": 11,
  "Contraband": 5,
  "Counting House": 5,
  "City": 5,
  "Expand": 7,
  "Forge": 7,
  "Grand Market": 6,
  "Goons": 6,
  "Hoard": 6,
  "Kings Court": 7,
  "Loan": 3,
  "Mint": 5,
  "Monument": 4,
  "Mountebank": 5,
  "Peddler": 8,
  "Platinum": 9,
  "Quarry": 4,
  "Rabble": 5,
  "Royal Seal": 5,
  "Talisman": 4,
  "Trade Route": 3,
  "Vault": 5,
  "Venture": 5,
  "Watchtower": 3,
  "Workers Village": 4,
  "Prize Pile": 0,
  "Bag Of Gold": 0,
  "Diadem": 0,
  "Fairgrounds": 6,
  "Farming Village": 4,
  "Followers": 0,
  "Fortune Teller": 3,
  "Hamlet": 2,
  "Harvest": 5,
  "Horse Traders": 4,
  "Horn Of Plenty": 5,
  "Hunting Party": 5,
  "Jester": 5,
  "Menagerie": 3,
  "Princess": 0,
  "Remake": 4,
  "Tournament": 4,
  "Trusty Steed": 0,
  "Young Witch": 4,
  "Border Village": 6,
  "Cache": 5,
  "Cartographer": 5,
  "Crossroads": 2,
  "Develop": 3,
  "Duchess": 2,
  "Embassy": 5,
  "Farmland": 6,
  "Fools Gold": 2,
  "Haggler": 5,
  "Highway": 5,
  "Ill Gotten Gains": 5,
  "Inn": 5,
  "Jack Of All Trades": 4,
  "Mandarin": 5,
  "Noble Brigand": 4,
  "Nomad Camp": 4,
  "Oasis": 3,
  "Oracle": 3,
  "Margrave": 5,
  "Scheme": 3,
  "Silk Road": 4,
  "Spice Merchant": 4,
  "Stables": 5,
  "Trader": 4,
  "Tunnel": 3,
  "Ruin Pile": 0,
  "Knights": 5,
  "Abandoned Mine": 0,
  "Altar": 6,
  "Armory": 4,
  "Band Of Misfits": 5,
  "Bandit Camp": 5,
  "Beggar": 2,
  "Catacombs": 5,
  "Count": 5,
  "Counterfeit": 5,
  "Cultist": 5,
  "Dame Anna": 5,
  "Dame Josephine": 5,
  "Dame Molly": 5,
  "Dame Natalie": 5,
  "Dame Sylvia": 5,
  "Death Cart": 4,
  "Feodum": 4,
  "Forager": 3,
  "Fortress": 4,
  "Graverobber": 5,
  "Hermit": 3,
  "Hovel": 1,
  "Hunting Grounds": 6,
  "Ironmonger": 4,
  "Junk Dealer": 5,
  "Madman": 0,
  "Market Square": 3,
  "Marauder": 4,
  "Mercenary": 0,
  "Mystic": 5,
  "Necropolis": 1,
  "Overgrown Estate": 1,
  "Pillage": 5,
  "Poor House": 1,
  "Procession": 4,
  "Rats": 4,
  "Rebuild": 5,
  "Rogue": 5,
  "Ruined Library": 0,
  "Ruined Market": 0,
  "Ruined Village": 0,
  "Sage": 3,
  "Scavenger": 4,
  "Sir Bailey": 5,
  "Sir Destry": 5,
  "Sir Martin": 4,
  "Sir Michael": 5,
  "Sir Vander": 5,
  "Spoils": 0,
  "Storeroom": 3,
  "Squire": 2,
  "Survivors": 0,
  "Urchin": 3,
  "Vagrant": 2,
  "Wandering Minstrel": 4,
  "Advisor": 4,
  "Baker": 5,
  "Butcher": 5,
  "Candlestick Maker": 2,
  "Doctor": 3,
  "Herald": 4,
  "Journeyman": 5,
  "Masterpiece": 3,
  "Merchant Guild": 5,
  "Plaza": 4,
  "Taxman": 4,
  "Soothsayer": 5,
  "Stonemason": 2,
  "Alms": 0,
  "Amulet": 3,
  "Artificer": 5,
  "Ball": 5,
  "Bonfire": 3,
  "Borrow": 0,
  "Bridge Troll": 5,
  "Caravan Guard": 3,
  "Champion": 6,
  "Coin Of The Realm": 2,
  "Disciple": 5,
  "Distant Lands": 5,
  "Dungeon": 3,
  "Duplicate": 4,
  "Expedition": 3,
  "Ferry": 3,
  "Fugitive": 4,
  "Gear": 3,
  "Giant": 5,
  "Guide": 3,
  "Haunted Woods": 5,
  "Hero": 5,
  "Hireling": 6,
  "Inheritance": 7,
  "Lost Arts": 6,
  "Lost City": 5,
  "Magpie": 4,
  "Messenger": 4,
  "Miser": 4,
  "Mission": 4,
  "Pathfinding": 8,
  "Page": 2,
  "Peasant": 2,
  "Pilgrimage": 4,
  "Plan": 3,
  "Port": 4,
  "Quest": 0,
  "Ranger": 4,
  "Raid": 5,
  "Ratcatcher": 2,
  "Raze": 2,
  "Relic": 5,
  "Royal Carriage": 5,
  "Save": 1,
  "Scouting Party": 2,
  "Seaway": 5,
  "Soldier": 3,
  "Storyteller": 5,
  "Swamp Hag": 5,
  "Teacher": 6,
  "Travelling Fair": 2,
  "Trade": 5,
  "Training": 6,
  "Transmogrify": 4,
  "Treasure Trove": 5,
  "Treasure Hunter": 3,
  "Warrior": 4,
  "Wine Merchant": 5,
  "Encampment": 2,
  "Plunder": 5,
  "Patrician": 2,
  "Emporium": 5,
  "Settlers": 2,
  "Bustling Village": 5,
  "Catapult": 3,
  "Rocks": 4,
  "Gladiator": 3,
  "Fortune": 8,
  "Castles": 3,
  "Humble Castle": 3,
  "Crumbling Castle": 4,
  "Small Castle": 5,
  "Haunted Castle": 6,
  "Opulent Castle": 7,
  "Sprawling Castle": 8,
  "Grand Castle": 9,
  "Kings Castle": 10,
  "Advance": 0,
  "Archive": 5,
  "Aqueduct": 0,
  "Arena": 0,
  "Bandit Fort": 0,
  "Banquet": 3,
  "Basilica": 0,
  "Baths": 0,
  "Battlefield": 0,
  "Capital": 5,
  "Charm": 5,
  "Chariot Race": 3,
  "City Quarter": 8,
  "Colonnade": 0,
  "Conquest": 6,
  "Crown": 5,
  "Delve": 2,
  "Defiled Shrine": 0,
  "Dominate": 14,
  "Enchantress": 3,
  "Engineer": 4,
  "Farmers Market": 3,
  "Forum": 5,
  "Fountain": 0,
  "Groundskeeper": 5,
  "Keep": 0,
  "Labyrinth": 0,
  "Legionary": 5,
  "Mountain Pass": 0,
  "Museum": 0,
  "Obelisk": 0,
  "Orchard": 0,
  "Overlord": 8,
  "Palace": 0,
  "Ritual": 4,
  "Royal Blacksmith": 8,
  "Sacrifice": 4,
  "Salt The Earth": 4,
  "Tax": 2,
  "Temple": 4,
  "Tomb": 0,
  "Tower": 0,
  "Triumphal Arch": 0,
  "Villa": 4,
  "Wall": 0,
  "Wolf Den": 0,
  "Wild Hunt": 5,
  "Windfall": 5,
  "Pig": 0,
  "MinusCard": 0,
  "MinusCoin": 0,
  "State Limbo": 0,
  "Druid Boons": 0,
  "Boon Drawpile": 0,
  "Boon Discardpile": 0,
  "The Earths Gift": 0,
  "The Fields Gift": 0,
  "The Flames Gift": 0,
  "The Forests Gift": 0,
  "The Moons Gift": 0,
  "The Mountains Gift": 0,
  "The Rivers Gift": 0,
  "The Seas Gift": 0,
  "The Skys Gift": 0,
  "The Suns Gift": 0,
  "The Swamps Gift": 0,
  "The Winds Gift": 0,
  "Hex Drawpile": 0,
  "Hex Discardpile": 0,
  "Bad Omens": 0,
  "Delusion": 0,
  "Envy": 0,
  "Famine": 0,
  "Fear": 0,
  "Greed": 0,
  "Haunting": 0,
  "Locusts": 0,
  "Misery": 0,
  "Plague": 0,
  "Poverty": 0,
  "War": 0,
  "Miserable": 0,
  "Twice Miserable": 0,
  "Envious": 0,
  "Deluded": 0,
  "Lost In The Woods": 0,
  "Bard": 4,
  "Blessed Village": 4,
  "Changeling": 3,
  "Cemetery": 4,
  "Cobbler": 5,
  "Conclave": 4,
  "Crypt": 5,
  "Cursed Village": 5,
  "Den Of Sin": 5,
  "Devils Workshop": 4,
  "Druid": 2,
  "Exorcist": 4,
  "Faithful Hound": 2,
  "Fool": 3,
  "Ghost Town": 3,
  "Guardian": 2,
  "Idol": 5,
  "Leprechaun": 3,
  "Monastery": 2,
  "Necromancer": 4,
  "Night Watchman": 3,
  "Pixie": 2,
  "Pooka": 5,
  "Raider": 6,
  "Sacred Grove": 5,
  "Secret Cave": 3,
  "Shepherd": 4,
  "Skulk": 4,
  "Tormentor": 5,
  "Tragic Hero": 5,
  "Tracker": 2,
  "Vampire": 5,
  "Werewolf": 5,
  "Cursed Gold": 4,
  "Goat": 2,
  "Haunted Mirror": 0,
  "Lucky Coin": 4,
  "Magic Lamp": 0,
  "Pasture": 2,
  "Pouch": 2,
  "Bat": 2,
  "Ghost": 4,
  "Imp": 2,
  "Will O Wisp": 0,
  "Wish": 0,
  "Zombie Apprentice": 3,
  "Zombie Mason": 3,
  "Zombie Spy": 3,
  "Acting Troupe": 3,
  "Border Guard": 2,
  "Cargo Ship": 3,
  "Ducat": 2,
  "Experiment": 3,
  "Flag Bearer": 4,
  "Hideout": 4,
  "Inventor": 4,
  "Improve": 3,
  "Lackeys": 2,
  "Mountain Village": 4,
  "Patron": 4,
  "Priest": 4,
  "Research": 4,
  "Silk Merchant": 4,
  "Old Witch": 5,
  "Recruiter": 5,
  "Scepter": 5,
  "Scholar": 5,
  "Sculptor": 5,
  "Seer": 5,
  "Spices": 5,
  "Swashbuckler": 5,
  "Treasurer": 5,
  "Villain": 5,
  "Flag": 0,
  "Horn": 0,
  "Key": 0,
  "Lantern": 0,
  "Treasure Chest": 0,
  "Academy": 5,
  "Barracks": 6,
  "Canal": 7,
  "Capitalism": 5,
  "Cathedral": 3,
  "Citadel": 8,
  "City Gate": 3,
  "Crop Rotation": 6,
  "Exploration": 4,
  "Fair": 4,
  "Fleet": 5,
  "Guildhall": 5,
  "Innovation": 6,
  "Pageant": 3,
  "Piazza": 5,
  "Road Network": 5,
  "Sewers": 3,
  "Silos": 4,
  "Sinister Plot": 4,
  "Star Chart": 3,
  "Sauna": 4,
  "Avanto": 5,
  "Black Market": 3,
  "Envoy": 4,
  "Governor": 5,
  "Prince": 8,
  "Stash": 5,
  "Summon": 5,
  "Walled Village": 4,
  "Black Market Pile": 0,
  "Dismantle": 4,
  "Captain": 6,
  "Church": 3,
  "Black Cat": 2,
  "Sleigh": 2,
  "Supplies": 2,
  "Camel Train": 3,
  "Goatherd": 3,
  "Scrap": 3,
  "Sheepdog": 3,
  "Snowy Village": 3,
  "Stockpile": 3,
  "Bounty Hunter": 4,
  "Cardinal": 4,
  "Cavalry": 4,
  "Groom": 4,
  "Hostelry": 4,
  "Village Green": 4,
  "Barge": 5,
  "Coven": 5,
  "Displace": 5,
  "Falconer": 5,
  "Fisherman": 5,
  "Gatekeeper": 5,
  "Hunting Lodge": 5,
  "Kiln": 5,
  "Livery": 5,
  "Mastermind": 5,
  "Paddock": 5,
  "Sanctuary": 5,
  "Destrier": 6,
  "Wayfarer": 6,
  "Animal Fair": 7,
  "Horse": 3,
  "Way Of The Butterfly": 0,
  "Way Of The Camel": 0,
  "Way Of The Chameleon": 0,
  "Way Of The Frog": 0,
  "Way Of The Goat": 0,
  "Way Of The Horse": 0,
  "Way Of The Mole": 0,
  "Way Of The Monkey": 0,
  "Way Of The Mouse": 0,
  "Way Of The Mule": 0,
  "Way Of The Otter": 0,
  "Way Of The Owl": 0,
  "Way Of The Ox": 0,
  "Way Of The Pig": 0,
  "Way Of The Rat": 0,
  "Way Of The Seal": 0,
  "Way Of The Sheep": 0,
  "Way Of The Squirrel": 0,
  "Way Of The Turtle": 0,
  "Way Of The Worm": 0,
  "Delay": 0,
  "Desperation": 0,
  "Gamble": 2,
  "Pursue": 2,
  "Ride": 2,
  "Toil": 2,
  "Enhance": 3,
  "March": 3,
  "Transport": 3,
  "Banish": 4,
  "Bargain": 4,
  "Invest": 4,
  "Seize The Day": 4,
  "Commerce": 5,
  "Demand": 5,
  "Stampede": 5,
  "Reap": 7,
  "Enclave": 8,
  "Alliance": 10,
  "Populate": 10,
  }
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
  fp_display.textContent = resp.first;
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
    let cardArr = [];
    for (const card in player) {
      cardArr.push(card);
    }
    cardArr.sort((x,y) => {
      if (cardCosts[x] > cardCosts[y]) {
        return -1;
      } else if (cardCosts[x] < cardCosts[y]) {
        return 1;
      } else {
        if (x > y) return 1;
        else if (x < y) return -1;
        else return 0;
      }
    });
    for (const card of cardArr) {
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
