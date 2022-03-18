// Importando o express
import  express  from "express";
import { router } from "./routes";
const app = express()

// Configurando o express
app.use(express.json())
app.use(router)

// Exportando o app
export { app }