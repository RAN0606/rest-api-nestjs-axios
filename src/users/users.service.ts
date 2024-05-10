import { HttpService } from '@nestjs/axios/dist';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable, map} from 'rxjs';
import {  User } from './users.interface'

@Injectable()
export class UsersService {
    constructor(private readonly httpService: HttpService){}

    // Get all users
    getAllUsers(): Observable<AxiosResponse<User[]>> { // Corrected function name and return type
        return this.httpService.get(`https://dummyjson.com/users`).pipe(
            map((resp) => resp.data.users)
        );
    }


    getUser(id: string): Observable<AxiosResponse<User>> { // Corrected return type
        return this.httpService.get(`https://dummyjson.com/users/${id}`).pipe(
            map((resp) => resp.data)
        );
    }

    // Add a user by id
    addUser(body:User): Observable<AxiosResponse<User>>{
        return this.httpService.post(`https://dummyjson.com/users/add`, {body}).pipe(map((resp) => resp.data));
    }

    // Update a user
    updateUser(body: User, id: string): Observable<AxiosResponse<User>> { // Corrected return type
        return this.httpService.put(`https://dummyjson.com/users/${id}`, {body}).pipe(
            map((resp) => resp.data)
        );
    }

    // Delete a user by id
    deletUser(id:string): Observable<AxiosResponse<User>> {
        return this.httpService.delete(
            `https://dummyjson.com/users/${id}`).pipe(map((resp) => resp.data));
    }
    }


