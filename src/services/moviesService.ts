import instance from "../config/axios";

export const getMovie = async (id: string) => {
    return await instance.get(`/movie/${id}`);
};

export const getMovies = (page: number, size: number) => {
    return instance.get(`/movie?page=${page}&size=${size}`);
};