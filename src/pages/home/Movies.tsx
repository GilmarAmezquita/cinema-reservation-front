import { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box } from '@mui/material';
import { getMovies } from '../../services/moviesService';
import { MovieType } from '../../types/MovieType';
import Item from './Item';

function ImageCarousel({ setMovie }: Props) {
    const [movies, setMovies] = useState<MovieType[]>([]);

    const handleGetMovies = () => {
        getMovies(0, 10).then((response) => {
            setMovies(response.data.content);
        });
    }

    useEffect(() => {
        handleGetMovies();
    }, []);

    return (
        <Box sx={{ 
            width: '80vw',
            margin: 'auto', 
            alignItems: 'center'
        }}>
            <Carousel
                animation='slide'
                interval={5000}
                sx={{width: '100%', height: '100%'}}
            >
                {movies.map((movie, index) => (
                    <Item key={index} Movie={movie} setMovie={setMovie}/>
                ))}
            </Carousel>
        </Box>
    );
}

export default ImageCarousel;

type Props = {
    setMovie: Function;
};