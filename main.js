
import * as dot from "dotenv";
import { Server } from './models/server.js';

dot.config();

const server = new Server().run();
