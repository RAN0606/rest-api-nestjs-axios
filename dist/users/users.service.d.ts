import { HttpService } from '@nestjs/axios/dist';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { User } from './users.interface';
export declare class UsersService {
    private readonly httpService;
    constructor(httpService: HttpService);
    getAllUsers(): Observable<AxiosResponse<User[]>>;
    getUser(id: string): Observable<AxiosResponse<User>>;
    addUser(body: User): Observable<AxiosResponse<User>>;
    updateUser(body: User, id: string): Observable<AxiosResponse<User>>;
    deletUser(id: string): Observable<AxiosResponse<User>>;
}
