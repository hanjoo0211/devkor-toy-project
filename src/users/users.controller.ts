import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { AddUserDto, UpdateUserDto } from './users.dto';
import { Users } from './users.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getUsers(): Promise<Users[]> {
        return this.usersService.getUsers();
    }

    @Post()
    addUser(@Body() addUserDto: AddUserDto): Promise<void> {
        return this.usersService.addUser(addUserDto);
    }

    @Get(':id')
    getUserById(@Param('id') id: number): Promise<Users> {
        return this.usersService.getUserById(id);
    }

    @Put(':id')
    updateUser(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto): Promise<void> {
        return this.usersService.updateUserById(id, updateUserDto);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number): Promise<void> {
        return this.usersService.deleteUserById(id);
    }
}