import {Card, Grid, Col, Title, Subtitle, TextInput, Button, Text, SelectBox, SelectBoxItem} from '@tremor/react';
import { useState, useEffect } from 'react';
import { Match, Team } from '../models';

export default function NewMatch(props) {
  const [teamOneId, setTeamOneId] = useState('1');
  const [teamTwoId, setTeamTwoId] = useState('2');
  const [date, setDate] = useState('');
  const [event, setEvent] = useState('');
  const [success, setSuccess] = useState(false);

  async function handleCreate() {
    const response = await fetch("http://localhost:8080/api/v1/matches", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        teamOne: {
          id: teamOneId
        },
        teamTwo: {
          id: teamTwoId
        },
        date,
        event
      })
    });
    const data = await response.json();
    console.log(data);
    setSuccess(true);
    setTeamOneId('1');
    setTeamTwoId('2');
    setDate('');
    setEvent('');
  }

  return (
    <div className="mb-6" id='new-match'>
      <Card className="mt-6" decoration="top" decorationColor="cyan">
        <Title className="mb-4" >Matches</Title>

        <div className="mb-4">
          <Subtitle className="mb-2" >Team One</Subtitle>
          <SelectBox
            onValueChange={(value) => setTeamOneId(value)}
            defaultValue="1"
          >
            {props.teams.map((team) => (
              <SelectBoxItem key={team.id} value={team.id} text={team.name} />
            ))}
          </SelectBox>
        </div>

        <div className="mb-4">
          <Subtitle className="mb-2" >Team Two</Subtitle>
          <SelectBox
            onValueChange={(value) => setTeamTwoId(value)}
            defaultValue="2"
          >
            {props.teams.map((team) => (
              <SelectBoxItem key={team.id} value={team.id} text={team.name} />
            ))}
          </SelectBox>
        </div>

        <div className="mb-4">
          <Subtitle className="mb-2" >Date</Subtitle>
          <TextInput value={date} onChange={(e) => setDate(e.target.value)} />
        </div>

        <div className="mb-4">
          <Subtitle className="mb-2" >Event</Subtitle>
          <TextInput value={event} onChange={(e) => setEvent(e.target.value)} />
        </div>

        {success && <Text className="mb-4" color="green" >Success! Match created.</Text>}

        <div className="mb-4">
            <Button color="cyan" size="md" onClick={handleCreate}>
                Create
            </Button>
        </div>
        </Card>
        </div>
  )
}

