import {Card, Grid, Col, Title, Subtitle, TextInput, Button, Text, SelectBox, SelectBoxItem} from '@tremor/react';
import { useState, useEffect } from 'react';
import { Team } from '../models';

export default function NewPlayer(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [alias, setAlias] = useState('');
  const [role, setRole] = useState('');
  const [country, setCountry] = useState('');
  const [dob, setDob] = useState('');
  const [selectedTeamId, setSelectedTeamId] = useState('1');
  const [success, setSuccess] = useState(false);


  async function handleCreate() {
    const response = await fetch("http://localhost:8080/api/v1/players", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName,
        lastName,
        alias,
        role,
        nativeCountry: country,
        dateOfBirth: dob,
        team: {
          id: selectedTeamId
        }
      })
    });
    const data = await response.json();
    setSuccess(true);
    setFirstName('');
    setLastName('');
    setAlias('');
    setRole('');
    setCountry('');
    setDob('');
    setSelectedTeamId('');
  }

  return (
    <div className="mb-6" id='new-player'>
      <Card className="mt-6" decoration="top" decorationColor="rose">
        <Title className="mb-4" >Players</Title>

        <div className="mb-4">
          <Subtitle className="mb-2" >First</Subtitle>
          <TextInput value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="mb-4">
          <Subtitle className="mb-2" >Last</Subtitle>
          <TextInput value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="mb-4">
          <Subtitle className="mb-2" >Alias</Subtitle>
          <TextInput value={alias} onChange={(e) => setAlias(e.target.value)} />
        </div>
        <div className="mb-4">
          <Subtitle className="mb-2" >Role</Subtitle>
          <TextInput value={role} onChange={(e) => setRole(e.target.value)} />
        </div>
        <div className="mb-4">
          <Subtitle className="mb-2" >Country</Subtitle>
          <TextInput value={country} onChange={(e) => setCountry(e.target.value)} />
        </div>
        <div className="mb-4">
          <Subtitle className="mb-2" >Date of Birth</Subtitle>
          <TextInput value={dob} onChange={(e) => setDob(e.target.value)} />
        </div>

        <div className="mb-4">
          <Subtitle className="mb-2" >Team</Subtitle>
          <SelectBox
            onValueChange={(value) => setSelectedTeamId(value)}
            defaultValue="1"
          >
            {props.teams.map((team) => (
              <SelectBoxItem key={team.id} value={team.id} text={team.name} />
            ))}
          </SelectBox>
        </div>

        {success && <Text className="mb-4" color="green" >Success! Player created.</Text>}

        <div className="mb-4">
            <Button color="rose" size="md" onClick={handleCreate}>
                Create
            </Button>
        </div>
        </Card>
        </div>
  )
}

