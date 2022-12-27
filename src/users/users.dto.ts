import { IsNumber, IsString } from 'class-validator';

export class AddUserDto {
  @IsString()
  name: string;

  @IsNumber()
  age: number;
}

export class UpdateUserDto {
  @IsNumber()
  age: number;
}