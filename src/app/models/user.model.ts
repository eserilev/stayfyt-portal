export class User {
    email: string;
    name: string;
    phone: string;
    password: string;
    dob: Date;
    friends: Array<User>;
    isAdmin: boolean;
    isTrainer: boolean;
    
}