import { Box, TextField } from '@mui/material';

export default function Register() {
    console.log('Register page');
    return (
        <Box 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                width: 300,
                margin: 'auto',
                padding: 2,
                border: '1px solid #ccc',
                borderRadius: 4,
            }}
        >
            <TextField label="Username" />
        </Box>
    )
}