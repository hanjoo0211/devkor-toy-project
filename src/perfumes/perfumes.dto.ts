import { IsString } from 'class-validator';

export class AddPerfumeDto {
    @IsString()
    name: string;

    @IsString()
    brand: string;

    @IsString()
    imagelink: string;

    @IsString()
    description: string;
}

export class UpdatePerfumeDto {
    @IsString()
    name: string;

    @IsString()
    brand: string;

    @IsString()
    imagelink: string;

    @IsString()
    description: string;
}