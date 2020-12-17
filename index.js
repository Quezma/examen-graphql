import {server} from './server';
import './database';

server.start({port: 8080}, ({port}) => {
	console.log('SERVER STARTED ON PORT: ', port);
})
