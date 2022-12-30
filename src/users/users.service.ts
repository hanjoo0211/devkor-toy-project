import { Injectable } from '@nestjs/common';
import { AddUserDto, UpdateUserDto } from './users.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
    ) {}

    getUsers(): Promise<Users[]> {
        return this.usersRepository.find();
    }

    async addUser(addUserDto: AddUserDto): Promise<void> {
        await this.usersRepository.insert(addUserDto);
    }

    getUserById(id: number): Promise<Users> {
        return this.usersRepository.findOneBy({ id });
    }

    async updateUserById(id: number, updateUserDto: UpdateUserDto): Promise<void> {
        await this.usersRepository.update(id, updateUserDto);
    }

    async deleteUserById(id: number): Promise<void> {
        await this.usersRepository.delete(id);
    }
}