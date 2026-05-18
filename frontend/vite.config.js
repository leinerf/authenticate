import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { config } from "dotenv"

// load environment variables
config();

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    define: {
        "process.env.CLIENT_ID": JSON.stringify(process.env.CLIENT_ID)
    }
})