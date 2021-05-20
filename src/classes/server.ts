import express from 'express';
import {SERVER} from '../global/environment';
import * as socketIO from 'socket.io';
import http from 'http';

export default class Server {
    public app: express.Application;
    public port: number;
    public io: socketIO.Server;
    private readonly _http: http.Server;
    private static _instance: Server;

    private constructor() {
        this.app = express();
        this.port = SERVER.port;
        this._http = new http.Server(this.app);
        this.io = new socketIO.Server(this._http);
        this.listenSockets();
    }

    public static get instance() {
        return this._instance || (this._instance = new this());
    }

    private listenSockets() {
        console.log('listen connections - sockets');
        this.io.on('connection', () => {
           console.log('client connected')
        });
    }

    init(callback: any) {
        this._http.listen(this.port, callback);
    }
}
