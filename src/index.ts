import Server from './classes/server';
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = Server.instance;
// BodyParser
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());

// CORS
const whitelist = ['http://localhost:63342', 'http://localhost:5000'];
server.app.use(cors({origin: true, credentials: true}));

// Routes
server.app.use('/', router);

server.init(() => {
    console.log(`⚡️ Server is running in port: ${server.port}`);
});
