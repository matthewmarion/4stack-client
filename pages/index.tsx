import Navbar from './navbar';
import { useEffect, useState } from 'react';
import {Team, Player, Match, Game, Map, GameType, StatLine} from './models';
import Dashboard from './dashboard';
import { useRouter } from 'next/router';
import Insert from './insert';
import { TabList, Tab } from '@tremor/react';
import Analytics from './analytics';


export const dynamic = 'force-dynamic';

export default function IndexPage() {

  const [teams, setTeams] = useState<Team[]>([]);
  const [players, setPlayers] = useState<Player[]>([]);
  const [matches, setMatches] = useState<Match[]>([]);
  const [games, setGames] = useState<Game[]>([]);
  const [maps, setMaps] = useState<Map[]>([]);
  const [modes, setModes] = useState<GameType[]>([]);
  const [statLines, setStatLines] = useState<StatLine[]>([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await fetch('http://localhost:8080/api/v1/teams');
      const data = await response.json();
      setTeams(data);
    };
    fetchTeams();

    const fetchPlayers = async () => {
      const response = await fetch('http://localhost:8080/api/v1/players');
      const data = await response.json();
      setPlayers(data);
    };
    fetchPlayers();

    const fetchMatches = async () => {
      const response = await fetch('http://localhost:8080/api/v1/matches');
      const data = await response.json();
      setMatches(data);
    };

    fetchMatches();

    const fetchGames = async () => {
      const response = await fetch('http://localhost:8080/api/v1/games');
      const data = await response.json();
      setGames(data);
    };
    fetchGames();

    const fetchMaps = async () => {
      const response = await fetch('http://localhost:8080/api/v1/maps');
      const data = await response.json();
      setMaps(data);
    };
    fetchMaps();

    const fetchModes = async () => {
      const response = await fetch('http://localhost:8080/api/v1/gameTypes');
      const data = await response.json();
      setModes(data);
    };
    fetchModes();

    const fetchStatLines = async () => {
      const response = await fetch('http://localhost:8080/api/v1/statLines');
      const data = await response.json();
      setStatLines(data);
      console.log(data);
    };
    fetchStatLines();
  }, []);

  const models = {
    teams,
    players,
    matches,
    games,
    modes,
    maps,
    statLines
  }

  const [showCard, setShowCard] = useState(1);

  return (
    <>
    <Navbar />
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <TabList
          defaultValue="1"
          onValueChange={(value) => setShowCard(parseInt(value))}
          className="mt-6 mb-6"
        >
          <Tab value="1" text="Dashboard"  />
          <Tab value="2" text="Insert" />
          <Tab value="3" text="Analytics" />
        </TabList>
        </div>
      {showCard === 1 && <Dashboard models={models} />}
      {showCard === 2 && <Insert models={models} />}
      {showCard === 3 && <Analytics models={models} />}
    </>
  );
}

