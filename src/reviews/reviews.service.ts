import { Injectable } from '@nestjs/common';
import { AddReviewDto, UpdateReviewDto } from './reviews.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reviews } from './reviews.entity';

@Injectable()
export class ReviewsService {
    constructor(
        @InjectRepository(Reviews)
        private reviewsRepository: Repository<Reviews>,
    ) {}

    getReviewsByPid(pid: number): Promise<Reviews[]> {
        return this.reviewsRepository.findBy({ pid });
    }

    getReviewsByUid(uid: number): Promise<Reviews[]> {
        return this.reviewsRepository.findBy({ uid });
    }

    async addReviewByPid(pid: number, addReviewDto: AddReviewDto): Promise<void> {
        await this.reviewsRepository.insert({
            pid: pid,
            uid: addReviewDto.uid,
            score: addReviewDto.score,
            content: addReviewDto.content
        });
    }

    getReviewByPidUid(pid: number, uid: number): Promise<Reviews> {
        return this.reviewsRepository.findOneBy({ pid, uid });
    }

    async updateReviewByPidUid(pid: number, uid: number, updateReviewDto: UpdateReviewDto): Promise<void> {
        await this.reviewsRepository.update({ pid, uid }, updateReviewDto);
    }

    async deleteReviewByPidUid(pid: number, uid: number): Promise<void> {
        await this.reviewsRepository.delete({ pid, uid });
    }

    getScoreByPid(pid: number): Promise<number> {
        return this.reviewsRepository.createQueryBuilder('reviews')
        .select('AVG(reviews.score)::numeric(2,1)', 'avgscore')
        .where(`reviews.pid = ${pid}`)
        .groupBy('reviews.pid')
        .getRawOne();
    }
}