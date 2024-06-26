"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const dist_1 = require("@nestjs/axios/dist");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let UsersService = class UsersService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getAllUsers() {
        return this.httpService.get(`https://dummyjson.com/users`).pipe((0, rxjs_1.map)((resp) => resp.data.users));
    }
    getUser(id) {
        return this.httpService.get(`https://dummyjson.com/users/${id}`).pipe((0, rxjs_1.map)((resp) => resp.data));
    }
    addUser(body) {
        return this.httpService.post(`https://dummyjson.com/users/add`, { body }).pipe((0, rxjs_1.map)((resp) => resp.data));
    }
    updateUser(body, id) {
        return this.httpService.put(`https://dummyjson.com/users/${id}`, { body }).pipe((0, rxjs_1.map)((resp) => resp.data));
    }
    deletUser(id) {
        return this.httpService.delete(`https://dummyjson.com/users/${id}`).pipe((0, rxjs_1.map)((resp) => resp.data));
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [dist_1.HttpService])
], UsersService);
//# sourceMappingURL=users.service.js.map