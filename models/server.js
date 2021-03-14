import express from "express";
import cors from "cors";
import { routes } from '../routes/routes.js';
import bodyParser from "body-parser";
export class Server {
    constructor(){
        this.app=express();
        this.port = process.env.PORT??3000;
        this.middleware();
        this.routes();
    }
    middleware(){
        this.app.use(express.static("public"));
        //this.app.use(express.json);
        this.app.use(bodyParser.json())
        this.app.use(cors());
    }
    routes(){
        this.loadRoutes();
    }
    loadRoutes(){
        const paths = routes;
        for(let route of paths){
            this.setVerbs(route);
        }
    }

    setVerbs(apiController){
        let api = apiController;
        try{
            api = new apiController();
        }catch (e){
            console.clear(); 
            console.log(api);
        }
        let verbs =["post","put","delete","get"];
        for(let verb of verbs){
            this.app[verb](api.path,(req,res)=>{
                api[verb]?.(req,res)??res.status(404).json(["not found"])
            });
        }
    }
    setPort(port){
        this.port=port;
    }
    run(){
        const port = this.port;
        this.app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`)
          })
    }
}