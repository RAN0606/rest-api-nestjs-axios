import { UsersService } from './users.service';
import { User } from './users.interface';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    getAllusers(): Promise<import("rxjs").Observable<import("axios").AxiosResponse<User[], any>>>;
    getUser(id: string): Promise<import("rxjs").Observable<import("axios").AxiosResponse<User, any>>>;
    addUser(body: User): Promise<import("rxjs").Observable<import("axios").AxiosResponse<User, any>>>;
    updateUser(body: User, id: string): Promise<import("rxjs").Observable<import("axios").AxiosResponse<User, any>>>;
    deleteUser(id: string): Promise<import("rxjs").Observable<import("axios").AxiosResponse<User, any>>>;
}
