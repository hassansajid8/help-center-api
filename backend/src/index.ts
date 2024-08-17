import express, {Express, Request, response, Response} from "express";
import cors from "cors";
import 'dotenv/config'
import { getCards, getSpecificCard, newCard} from "./actions";

const app: Express = express();
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 4444;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (request: Request, response: Response) => {
    response.send("API for Helper-Cards API Project");
})

app.get("/cards", async (request: Request, response: Response) => {

    try{
        const data = await getCards();
        
        if(data == null){
            response.sendStatus(404);
            return;
        }

        response.status(200).json(data);
    }catch(e) {
        console.log(e);
        response.sendStatus(500);
    }

    
});

app.get("/cards/:title", async (request: Request, response: Response) => {
    let data = null;

    try{
        const queryTitle = request.params.title;

        data = await getSpecificCard(queryTitle);

        if(data == null){
            response.sendStatus(404);
            return;
        }

        response.status(200).json(data);

    }catch(e){
        console.log(e);
        response.sendStatus(500);
    }
})

app.post('/cards', async (request, response) => {
    let data = null;

    try{
        const title = request.body.title;
        const body = request.body.body;

        data = await newCard(title, body);

        if(data == 400){
            response.sendStatus(400);
            return;
        }

        if(data == null){
            response.sendStatus(404);
            return;
        }
 
        response.status(200).json(data);
    }catch(e) {
        console.log(e);
        response.sendStatus(500);
    }
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port} 🚀`);
});

