import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { AddReviewDto, UpdateReviewDto } from './reviews.dto';
import { Reviews } from './reviews.entity';

@Controller('reviews')
export class ReviewsController {
    constructor(private readonly reviewsService: ReviewsService) {}

    @Get(':pid/avgscore')
    getScoreByPid(@Param('pid') pid: number): Promise<number> {
        return this.reviewsService.getScoreByPid(pid);
    }

    @Get(':pid')
    getReviewsByPid(@Param('pid') pid: number): Promise<Reviews[]> {
        return this.reviewsService.getReviewsByPid(pid);
    }

    @Post(':pid')
    addReviewByPid(@Param('pid') pid: number, @Body() addReviewDto: AddReviewDto): Promise<void> {
        return this.reviewsService.addReviewByPid(pid, addReviewDto);
    }

    @Get(':pid/:uid')
    getReviewByPIdUid(@Param('pid') pid: number, @Param('uid') uid: number): Promise<Reviews> {
        return this.reviewsService.getReviewByPidUid(pid, uid);
    }

    @Put(':pid/:uid')
    updateReviewByPidUid(@Param('pid') pid: number, @Param('uid') uid: number, @Body() updateReviewDto: UpdateReviewDto): Promise<void> {
        return this.reviewsService.updateReviewByPidUid(pid, uid, updateReviewDto);
    }

    @Delete(':pid/:uid')
    deleteReviewByPidUid(@Param('pid') pid: number, @Param('uid') uid: number): Promise<void> {
        return this.reviewsService.deleteReviewByPidUid(pid, uid);
    }
}