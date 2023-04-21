import {Card, Grid, Col, Title, Text, Subtitle, TextInput, Button} from '@tremor/react';
import { useState } from 'react';

export default function NewTeam() {
  const [city, setCity] = useState('');
  const [name, setName] = useState('');
  const [success, setSuccess] = useState(false);

  const handleCreate = async () => {
    const response = await fetch('http://localhost:8080/api/v1/teams', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ city, name })
    });
    const data = await response.json();
    console.log('Team created:', data);
    setSuccess(true);
    setCity('');
    setName('');
  };

  return (
    <div className="mb-6" id='new-team'>
      <Card className="mt-6" decoration="top" decorationColor="emerald">
        <Title className="mb-4">Teams</Title>

        <div className="mb-4">
          <Subtitle className="mb-2">City</Subtitle>
          <TextInput value={city} onChange={(e) => setCity(e.target.value)} />
        </div>
        <div className="mb-4">
          <Subtitle className="mb-2">Name</Subtitle>
          <TextInput value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        {success && <Text className="mb-4" color="green" >Success! Team created.</Text>}

        <div className="mb-4">
          <Button color="emerald" size="md" onClick={handleCreate}>
            Create
          </Button>
        </div>
      </Card>
    </div>
  );
}
