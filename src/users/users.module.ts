import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import {UsersService } from './users.service';

@Module({
    imports: [HttpModule],
    exports: [HttpModule],
    providers: [UsersService],
})
export class UsersModule {}
