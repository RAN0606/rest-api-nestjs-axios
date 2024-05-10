import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.interface'

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){}

    @Get()
    async getAllusers(){
        return await this.userService.getAllUsers();
    }

    @Get(':id')
    async getUser(@Param('id') id: string){
        return await this.userService.getUser(id);
    }

    @Post('add')
    async addUser(@Body() body: User){
        return this.userService.addUser(body);
    }

    @Put(':id')
    async updateUser(@Body() body: User, @Param('id') id: string){
        return await this.userService.updateUser(body, id);

    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string){
        return await this.userService.deletUser(id);
    }






}

