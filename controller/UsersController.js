
import { BaseController } from './BaseController.js';
export class UserController extends  BaseController{
    path="/users/:id?";
    get({
        query
    },res){
        res.json(query);
    }
    post({body,params},res){
        res.json(body);
    }
    put({body,params},res){
        res.json(params);;
    }
}