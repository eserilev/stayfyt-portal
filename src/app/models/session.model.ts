import { User } from './user.model';

export class Session {
    trainers: Array<User>;
    clients: Array<User>;
    maxClients: Number;
    start: Date;
    end: Date;
    category: String;
    location: String;
    active: Boolean;  
}



