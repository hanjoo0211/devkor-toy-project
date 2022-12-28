import { IsNumber, IsString,  } from 'class-validator';

export class AddReviewDto {
    @IsNumber()
    uid: number;

    @IsNumber()
    score: number;

    @IsString()
    content: string;
}

export class UpdateReviewDto {
    @IsNumber()
    score: number;

    @IsString()
    content: string;
}