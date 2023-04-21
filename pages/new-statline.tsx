import {Card, Grid, Col, Title, Subtitle, TextInput, Button, Text, SelectBox, SelectBoxItem} from '@tremor/react';
import { useState, useEffect } from 'react';
import { Team } from '../models';

export default function NewStatLine(props) {
  const [kills, setKills] = useState('');
  const [deaths, setDeaths] = useState('');
  const [assists, setAssists] = useState('');
  const [damage, setDamage] = useState('');
  const [nonTradedKills, setNonTradedKills] = useState('');
  const [highestStreak, setHighestStreak] = useState('');
  const [hillTime, setHillTime] = useState('');
  const [contestedHillTime, setContestedHillTime] = useState('');
  const [defends, setDefends] = useState('');
  const [firstBloods, setFirstBloods] = useState('');
  const [plants, setPlants] = useState('');
  const [defuses, setDefuses] = useState('');
  const [zoneCaptures, setZoneCaptures] = useState('');
  const [zoneTierCaptures, setZoneTierCaptures] = useState('');
  const [selectedPlayerId, setSelectedPlayerId] = useState('1');
  const [selectedGameId, setSelectedGameId] = useState('1');
  const [success, setSuccess] = useState(false);


  async function handleCreate() {
    const response = await fetch("http://localhost:8080/api/v1/statLines", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        player: {
          id: selectedPlayerId
        },
        game: {
          id: selectedGameId
          },
        kills: kills,
        deaths: deaths,
        assists: assists,
        damage: damage,
        nonTradedKills: nonTradedKills,
        highestStreak: highestStreak,
        hillTime: hillTime,
        contestedHillTime: contestedHillTime,
        defends: defends,
        firstBloods: firstBloods,
        plants: plants,
        defuses: defuses,
        zoneCaptures: zoneCaptures,
        zoneTierCaptures: zoneTierCaptures
        },
      )
    });
    const data = await response.json();
    setSuccess(true);
  }

  return (
    <div className="mb-6" id='new-player'>
      <Card className="mt-6" decoration="top" decorationColor="rose">
        <Title className="mb-4" >Stats</Title>

        <div className="mb-4">
          <Subtitle className="mb-2" >Player</Subtitle>
          <SelectBox
            onValueChange={(value) => setSelectedPlayerId(value)}
            defaultValue="1"
          >
            {props.players.map((player) => (
              <SelectBoxItem key={player.id} value={player.id} text={player.alias} />
            ))}
          </SelectBox>
        </div>

        <div className="mb-4">
          <Subtitle className="mb-2" >Game</Subtitle>
          <SelectBox
            onValueChange={(value) => setSelectedGameId(value)}
            defaultValue="1"
          >
            {props.games.map((game) => (
              <SelectBoxItem key={game.id} value={game.id} text={`Match ID ${game.match.id} - ${game.match.teamOne.name} vs ${game.match.teamTwo.name}: ${game.match.date} : Game ID ${game.id} - ${game.gameType.name} on ${game.map.name}`} />
            ))}
          </SelectBox>
        </div>
          <div className="mb-4">
            <Subtitle className="mb-2" >Kills</Subtitle>
            <TextInput value={kills} onChange={(e) => setKills(e.target.value)} />
          </div>
          <div className="mb-4">
            <Subtitle className="mb-2" >Deaths</Subtitle>
            <TextInput value={deaths} onChange={(e) => setDeaths(e.target.value)} />
          </div>
          <div className="mb-4">
            <Subtitle className="mb-2" >Assists</Subtitle>
            <TextInput value={assists} onChange={(e) => setAssists(e.target.value)} />
          </div>
          <div className="mb-4">
            <Subtitle className="mb-2" >Damage</Subtitle>
            <TextInput value={damage} onChange={(e) => setDamage(e.target.value)} />
          </div>
          <div className="mb-4">
            <Subtitle className="mb-2" >Non-Traded Kills</Subtitle>
            <TextInput value={nonTradedKills} onChange={(e) => setNonTradedKills(e.target.value)} />
          </div>
          <div className="mb-4">
            <Subtitle className="mb-2" >Highest Streak</Subtitle>
            <TextInput value={highestStreak} onChange={(e) => setHighestStreak(e.target.value)} />
          </div>
          <div className="mb-4">
            <Subtitle className="mb-2" >Hill Time</Subtitle>
            <TextInput value={hillTime} onChange={(e) => setHillTime(e.target.value)} />
          </div>
          <div className="mb-4">
            <Subtitle className="mb-2" >Contested Hill Time</Subtitle>
            <TextInput value={contestedHillTime} onChange={(e) => setContestedHillTime(e.target.value)} />
          </div>
          <div className="mb-4">
            <Subtitle className="mb-2" >Defends</Subtitle>
            <TextInput value={defends} onChange={(e) => setDefends(e.target.value)} />
          </div>
          <div className="mb-4">
            <Subtitle className="mb-2" >First Bloods</Subtitle>
            <TextInput value={firstBloods} onChange={(e) => setFirstBloods(e.target.value)} />
          </div>
          <div className="mb-4">
            <Subtitle className="mb-2" >Plants</Subtitle>
            <TextInput value={plants} onChange={(e) => setPlants(e.target.value)} />
          </div>
          <div className="mb-4">
            <Subtitle className="mb-2" >Defuses</Subtitle>
            <TextInput value={defuses} onChange={(e) => setDefuses(e.target.value)} />
          </div>
          <div className="mb-4">
            <Subtitle className="mb-2" >Zone Captures</Subtitle>
            <TextInput value={zoneCaptures} onChange={(e) => setZoneCaptures(e.target.value)} />
          </div>
          <div className="mb-4">
            <Subtitle className="mb-2" >Zone Tier Captures</Subtitle>
            <TextInput value={zoneTierCaptures} onChange={(e) => setZoneTierCaptures(e.target.value)} />
          </div>

        {success && <Text className="mb-4" color="green" >Success! Stat created.</Text>}

        <div className="mb-4">
            <Button color="rose" size="md" onClick={handleCreate}>
                Create
            </Button>
        </div>
        </Card>
        </div>
  )
}

