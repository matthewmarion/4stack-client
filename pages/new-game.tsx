import { Card, Grid, Col, Title, Subtitle, TextInput, Button, Text, SelectBox, SelectBoxItem } from '@tremor/react';
import { useState, useEffect } from 'react';
import { Game, GameType, Map } from '../models';

export default function NewGame(props) {
  const [matchId, setMatchId] = useState('1');
  const [gameTypeId, setGameTypeId] = useState('1');
  const [mapId, setMapId] = useState('1');
  const [score, setScore] = useState([0, 0]);
  const [success, setSuccess] = useState(false);

  async function handleCreate() {
    const response = await fetch("http://localhost:8080/api/v1/games", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        match: {
          id: matchId
        },
        gameType: {
          id: gameTypeId
        },
        map: {
          id: mapId
        },
        score,
        statLines: []
      })
    });
    const data = await response.json();
    console.log(data);
    setSuccess(true);
    setMatchId('1');
    setGameTypeId('1');
    setMapId('1');
    setScore([0, 0]);
  }

  return (
    <div className="mb-6" id='new-game'>
      <Card className="mt-6" decoration="top" decorationColor="cyan">
        <Title className="mb-4" >Games</Title>

        <div className="mb-4">
          <Subtitle className="mb-2" >Match</Subtitle>
          <SelectBox
            onValueChange={(value) => setMatchId(value)}
            defaultValue="1"
          >
            {props.matches.map((match) => (
              <SelectBoxItem key={match.id} value={match.id} text={`Match ${match.id} - ${match.teamOne.name} vs ${match.teamTwo.name}: ${match.date}`} />
            ))}
          </SelectBox>
        </div>

        <div className="mb-4">
          <Subtitle className="mb-2" >Game Type</Subtitle>
          <SelectBox
            onValueChange={(value) => setGameTypeId(value)}
            defaultValue="1"
          >
            {props.modes.map((mode) => (
              <SelectBoxItem key={mode.id} value={mode.id} text={mode.name} />
            ))}
          </SelectBox>
        </div>

        <div className="mb-4">
          <Subtitle className="mb-2" >Map</Subtitle>
          <SelectBox
            onValueChange={(value) => setMapId(value)}
            defaultValue="1"
          >
            {props.maps.map((map) => (
              <SelectBoxItem key={map.id} value={map.id} text={map.name} />
            ))}
          </SelectBox>
        </div>

        <div className="mb-4">
          <Grid>
            <Col>
            <Subtitle className="mb-2" >Team One Score</Subtitle>
              <TextInput className="mb-4" value={score[0]} onChange={(e) => setScore([e.target.value, score[1]])} />
            </Col>
            <Col>
            <Subtitle className="mb-2" >Team Two Score</Subtitle>
              <TextInput value={score[1]} onChange={(e) => setScore([score[0], e.target.value])} />
            </Col>
          </Grid>
        </div>

        {success && <Text className="mb-4" color="green" >Success! Game created.</Text>}

        <div className="mb-4">
          <Button color="cyan" size="md" onClick={handleCreate}>Create</Button>
        </div>
        </Card>
        </div>
  )
}
