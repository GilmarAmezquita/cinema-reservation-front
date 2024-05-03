import { useEffect, useState } from "react";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { Person } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../services/authService";

export default function Login() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [logged, setLogged] = useState<boolean>(false);

    let token = useSelector((state: any) => state.auth.isLoggedIn);

    useEffect(() => {
        if (token) {
            setLogged(true);
        }
    }, [token]);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
            handleClose
        }
    }

    const handleLogin = () => {
        login({ email, password })
            .then((res) => {
                if (res.status === 200) {
                    setLogged(true);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            <IconButton onClick={handleOpen}>
                <Person />
            </IconButton>
            {isOpen && (
                <Box 
                    sx={{
                        position: 'absolute',
                        top: 'calc(100% + 25px)', // Coloca el modal debajo del botón
                        left: 'calc(75%)', // Centra el modal horizontalmente
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        width: 300,
                        margin: 'auto',
                        border: '1px solid #ccc',
                        borderRadius: 3,
                        backgroundColor: 'white',
                        zIndex: 9999, // Asegura que esté por encima de otros elementos
                    }}
                    onKeyDown={handleKeyDown}
                >
                    <Box 
                        sx={{
                            backgroundColor: '#B8B8D1',
                            width: '100%',
                            height: 50,
                            borderRadius: '10px 10px 0 0',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography 
                            variant="h5"
                            textAlign="center"
                            sx={{
                                color: '#5B5F97',
                                lineHeight: '50px',
                            }}
                        >
                            Iniciar sesión
                        </Typography>
                    </Box>
                    <TextField 
                        label="Email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <TextField
                        label="Password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <Box sx={
                        {
                            display: 'flex',
                            justifyContent: 'center',
                        }
                    }>
                        <Button variant="contained" color="secondary" onClick={handleLogin}>
                            Ingresar
                        </Button>
                    </Box>
                </Box>
            )}
        </>
    )
}