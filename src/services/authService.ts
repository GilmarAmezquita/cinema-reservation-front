import instance from "../config/axios";

export const register = async (data: RegisterCredentials) => {
    return await instance.post("/auth/register", data);
}

export const login = async (data: LoginCredentials) => {
    return await instance.post("/auth/login", data);
}

export type RegisterCredentials = {
    email: string;
    firstName: string;
    lastName: string;
    address: string;
    password: string;
}

export type LoginCredentials = {
    email: string;
    password: string;
}