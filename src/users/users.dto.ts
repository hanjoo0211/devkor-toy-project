import { IsString } from 'class-validator';

export class AddUserDto {
    @IsString()
    username: string;

    @IsString()
    password: string;
}

export class UpdateUserDto {
    @IsString()
    username: string;
  
    @IsString()
    password: string;
}