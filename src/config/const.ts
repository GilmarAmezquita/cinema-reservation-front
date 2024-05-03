declare global {
    interface ImportMetaEnv {
        VITE_API_HOST: string;
        VITE_APP_URL: string;
        VITE_APP_SECRET_KEY: string;
    }
}

export const { VITE_API_HOST: API_HOST, VITE_APP_URL: APP_URL, VITE_APP_SECRET_KEY: APP_SECRET_KEY } = import.meta.env;