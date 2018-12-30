// Team Stats


const team = {

  // Players property
  _players: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11
    },
    {
      firstName: 'Jeffy',
      lastName: 'Swizzledick',
      age: 43
    },
    {
      firstName: 'Steve-O',
      lastName: 'McGillicutty',
      age: 22
    }
  ],

  // Games property
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: '49ers',
      teamPoints: 4,
      opponentPoints: 287
    },
    {
      opponent: 'Packers',
      teamPoints: 429,
      opponentPoints: 3
    }
  ],

  // Get Players
  get players() { return this._players; },

  // Get Games
  get games() { return this._games; },

  // Method to add a new player
  addPlayer: function(firstName, lastName, age) {
    let player = {
      firstName,
      lastName,
      age
    };
    this._players.push(player)
  },

  // Method to add a new game
  addGame: function(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent,
      teamPoints,
      opponentPoints
    }
    this._games.push(game);
  }
};

// Adding new players
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

// Adding new games
team.addGame('KC BBQers', 27, 6);
team.addGame('Detroit Thugs', 4, 176);
team.addGame('Portland Gentrifiers', 2, 86);

console.log(team._players);
console.log('---------------------');
console.log(team._games);
