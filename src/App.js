import React from 'react';
import { Container, Typography } from '@mui/material';
import ImageUploader from './components/ImageUploader';
import FabricVisualizer from './components/FabricVisualizer';

function App() {
  const [dressImage, setDressImage] = React.useState(null);
  const [fabricImage, setFabricImage] = React.useState(null);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Fabric Dress Visualizer
      </Typography>
      <ImageUploader setDressImage={setDressImage} setFabricImage={setFabricImage} />
      {dressImage && fabricImage && (
        <FabricVisualizer dressImage={dressImage} fabricImage={fabricImage} />
      )}
    </Container>
  );
}

export default App;
