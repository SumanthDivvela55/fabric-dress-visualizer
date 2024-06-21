import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Button } from '@mui/material';

const ImageUploader = ({ setDressImage, setFabricImage }) => {
    const onDropDress = (acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            setDressImage(e.target.result);
        };
        reader.readAsDataURL(file);
    };

    const onDropFabric = (acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            setFabricImage(e.target.result);
        };
        reader.readAsDataURL(file);
    };

    const { getRootProps: getRootDressProps, getInputProps: getInputDressProps } = useDropzone({ onDrop: onDropDress });
    const { getRootProps: getRootFabricProps, getInputProps: getInputFabricProps } = useDropzone({ onDrop: onDropFabric });

    return (
        <Box display="flex" justifyContent="space-between" my={4}>
            <Box {...getRootDressProps()} border="2px dashed #000" p={2} textAlign="center">
                <input {...getInputDressProps()} />
                <Button variant="contained" color="primary">Upload Dress Image</Button>
            </Box>
            <Box {...getRootFabricProps()} border="2px dashed #000" p={2} textAlign="center">
                <input {...getInputFabricProps()} />
                <Button variant="contained" color="primary">Upload Fabric Image</Button>
            </Box>
        </Box>
    );
};

export default ImageUploader;
