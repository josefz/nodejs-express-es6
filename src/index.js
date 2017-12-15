import express from "express";
import http from "http";
import config from './config.json';
import { setupMiddleware } from './middleware';
import api from "./api";

let app = express();
app.server = http.createServer( app );

setupMiddleware( app, config );

// api router
app.use( '/api', api() );

//start server
app.server.listen( process.env.PORT || config.port, () => {
    console.log( `Started on port ${app.server.address().port}` );
} );

export default app;