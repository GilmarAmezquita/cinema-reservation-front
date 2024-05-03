import { Paper, Typography } from "@mui/material";
import { MovieType } from "../../types/MovieType";

export default function Item({ Movie, setMovie }: Props) {
    const handleClick = () => {
        setMovie(Movie);
    }

    return (
        <div onClick={handleClick}>
            <Paper sx={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                <img src={Movie.url} alt={Movie.name} style={{ width: '300px' }} />
                <Typography variant='h6'>{Movie.name}</Typography>
                <Typography variant='body2'>{Movie.director}</Typography>
                <Typography variant='body2'>{Movie.durationMin} min</Typography>
            </Paper>
        </div>
    );
}

type Props = {
    Movie: MovieType;
    setMovie: Function;
};