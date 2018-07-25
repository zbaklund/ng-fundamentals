import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    currentUser: IUser;

    loginUser(userName: string, password: string){
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: 'Zach',
            lastName: 'Baklund'
        }
    }

    isAuthenticated() {
        return !!this.currentUser;
    }
}