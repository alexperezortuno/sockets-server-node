import {ServerParam} from '../interfaces/server-param';

export const SERVER: ServerParam = {
    port: Number(process.env.PORT) || 5000,
}
