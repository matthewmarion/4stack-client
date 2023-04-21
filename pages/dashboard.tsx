import {Team, Player, Match, Game, Map, GameType, StatLine} from './models';
import { useEffect, useState } from 'react';
import { Card, Title, Text, Button, Grid, Col } from '@tremor/react';
import UsersTable from './team-table';
import Search from './search';
import Navbar from './navbar';
import PlayerTable from './player-table';
import MatchTable from './match-table';
import GameTable from './game-table';
import MapTable from './map-table';
import ModeTable from './mode-table';
import StatLineTable from './statline-table';

export default function Dashboard(props) {
    const [filteredTeams, setFilteredTeams] = useState<Team[]>([]);
    const [filteredPlayers, setFilteredPlayers] = useState<Player[]>([]);
    const [filteredMatches, setFilteredMatches] = useState<Match[]>([]);
    const [filteredGames, setFilteredGames] = useState<Game[]>([]);
    const [filteredMaps, setFilteredMaps] = useState<Map[]>([]);
    const [filteredModes, setFilteredModes] = useState<GameType[]>([]);
    const [filteredStatLines, setFilteredStatLines] = useState<StatLine[]>([]);

    const handleTeamSearch = (term: string) => {
        // Filter the teams based on the search term
        const filtered = props.models.teams.filter(team => {
          return team.name.toLowerCase().includes(term.toLowerCase()) ||
          team.city.toLowerCase().includes(term.toLowerCase());
        });
        setFilteredTeams(filtered);
      };

      const handlePlayerSearch = (term: string) => {
        // Filter the teams based on the search term
        const filtered =  props.models.players.filter(player => {
          return player.alias.toLowerCase().includes(term.toLowerCase());
        });
        setFilteredPlayers(filtered);
      };

      const handleMatchSearch = (term: string) => {
        // Filter the teams based on the search term
        const filtered =  props.models.matches.filter(match => {
          return match.event.toLowerCase().includes(term.toLowerCase());
        });
        setFilteredMatches(filtered);
      };
      const handleGameSearch = (term: string) => {
        // Filter the games based on the search term
        const filtered =  props.models.games.filter(game => {
        return game.id.toString().includes(term);
        });
        setFilteredGames(filtered);
        };

        const handleMapSearch = (term: string) => {
        // Filter the maps based on the search term
        const filtered =  props.models.maps.filter(map => {
        return map.name.toLowerCase().includes(term.toLowerCase());
        });
        setFilteredMaps(filtered);
        };

        const handleModeSearch = (term: string) => {
        // Filter the modes based on the search term
        const filtered =  props.models.modes.filter(mode => {
        return mode.name.toLowerCase().includes(term.toLowerCase());
        });
        setFilteredModes(filtered);
        };

        const handleStatLineSearch = (term: string) => {
        // Filter the statlines based on the search term
        const filtered =  props.models.statLines.filter(statline => {
        return statline.player.alias.toLowerCase().includes(term.toLowerCase());
        });
        setFilteredStatLines(filtered);
        };

    return (
        <main className="h-full bg-gray-50 p-4 md:p-10 mx-auto max-w-7xl">


    <Card className="mx-auto mb-6 pb-2" decoration="top" decorationColor="indigo">
    <Grid numCols={7} numColsSm={2} numColsLg={7} className="mb-6 gap-2">

        <Col>
          <Button color="emerald" size="md" onClick={() => console.log("clicked")}>
            New Team
          </Button>
        </Col>
        <Col>
          <Button color="emerald" size="md" onClick={() => console.log("clicked")}>
            New Player
          </Button>
        </Col>
        <Col>
          <Button color="cyan" size="md" onClick={() => console.log("clicked")}>
            New Match
          </Button>
        </Col>
        <Col>
          <Button color="cyan" size="md" onClick={() => console.log("clicked")}>
            New Game
          </Button>
        </Col>
        <Col>
          <Button color="violet" size="md" onClick={() => console.log("clicked")}>
            New Map
          </Button>
        </Col>
        <Col>
          <Button color="violet" size="md" onClick={() => console.log("clicked")}>
            New Mode
          </Button>
        </Col>
        <Col>
          <Button color="rose" size="md" onClick={() => console.log("clicked")}>
            New Stat
          </Button>
        </Col>

    </Grid>
    </Card>

    <Grid numCols={1} numColsSm={1} numColsLg={1} className="gap-2">
      <Col>
        <div className="mb-6" id='teams-section'>
          <Title>Teams</Title>
          <Search onSearch={handleTeamSearch} />
          <Card className="mt-6">
            <UsersTable objects={filteredTeams.length == 0 ? props.models.teams : filteredTeams} />
          </Card>
         </div>
      </Col>
      <Col>
        <div className="mb-6" id="players-section">
          <Title>Players</Title>
          <Search onSearch={handlePlayerSearch} />
          <Card className="mt-6">
            <PlayerTable objects={filteredPlayers.length == 0 ? props.models.players : filteredPlayers} />
          </Card>
        </div>
      </Col>
      <Col>
        <div className="mb-6" id="match-section">
          <Title>Matches</Title>
          <Search onSearch={handleMatchSearch} />
          <Card className="mt-6">
            <MatchTable objects={filteredMatches.length == 0 ? props.models.matches : filteredMatches} />
          </Card>
        </div>
      </Col>
      <Col>
        <div className="mb-6" id="game-section">
          <Title>Games</Title>
          <Search onSearch={handleGameSearch} />
          <Card className="mt-6">
            <GameTable objects={filteredGames.length == 0 ? props.models.games : filteredGames} />
          </Card>
        </div>
      </Col>

      <Col>
        <div className="mb-6" id="map-section">
          <Title>Maps</Title>
          <Search onSearch={handleMapSearch} />
          <Card className="mt-6">
            <MapTable objects={filteredMaps.length == 0 ? props.models.maps : filteredMaps} />
          </Card>
        </div>
      </Col>
      <Col>
        <div className="mb-6" id="mode-section">
          <Title>Modes</Title>
          <Search onSearch={handleModeSearch} />
          <Card className="mt-6">
            <ModeTable objects={filteredModes.length == 0 ? props.models.modes : filteredModes} />
          </Card>
        </div>
      </Col>
      <Col>
        <div className="mb-6" id="statline-section">
          <Title>Statlines</Title>
          <Search onSearch={handleStatLineSearch} />
          <Card className="mt-6">
            <StatLineTable objects={filteredStatLines.length == 0 ? props.models.statLines : filteredStatLines} />
          </Card>
        </div>
      </Col>
    </Grid>

    </main>
    )
}
