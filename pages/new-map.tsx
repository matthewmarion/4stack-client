import {Card, Grid, Col, Title, Text, Subtitle, TextInput, Button} from '@tremor/react';
import { useState } from 'react';

export default function NewMap() {
  const [name, setName] = useState('');
  const [success, setSuccess] = useState(false);

  const handleCreate = async () => {
    const response = await fetch('http://localhost:8080/api/v1/maps', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    });
    const data = await response.json();
    setSuccess(true);
    setName('');
  };

  return (
    <div className="mb-6" id='new-map'>
      <Card className="mt-6" decoration="top" decorationColor="violet">
        <Title className="mb-4">Maps</Title>

        <div className="mb-4">
          <Subtitle className="mb-2">Name</Subtitle>
          <TextInput value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        {success && <Text className="mb-4" color="green" >Success! Map created.</Text>}

        <div className="mb-4">
          <Button color="violet" size="md" onClick={handleCreate}>
            Create
          </Button>
        </div>
      </Card>
    </div>
  );
}
