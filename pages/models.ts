export interface Team {
    id: number;
    name: string;
    city: string;
  }

export interface Player {
    id: number;
    alias: string;
    dateOfBirth: string;
    firstName: string;
    lastName: string;
    nativeCountry: string;
    role: string;
    team: Team;
  }

export interface Match {
    id: number;
    teamOne: Team;
    teamTwo: Team;
    date: string;
    event: string;
  }

export interface Map {
    id: number;
    name: string;
  }

export interface GameType {
    id: number;
    name: string;
  }

export interface StatLine {
    id: number;
    player: Player;
    game: Game;
    kills: number;
    deaths: number;
    hillTime: number;
    contestedHillTime: number;
    firstBloods: number;
    zoneCaptures: number;
    zoneTierCaptures: number;
    defends: number;
    damage: number;
    plants: number;
    defuses: number;
  }

export interface Game {
    id: number;
    match: Match;
    gameType: GameType;
    map: Map;
    score: number[];
    statLines: StatLine[];
  }
