import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Perfumes } from './perfumes.entity';

@Injectable()
export class PerfumesService {
    constructor(
        @InjectRepository(Perfumes)
        private perfumesRepository: Repository<Perfumes>,
    ) {}

    getPerfumes(): Promise<Perfumes[]> {
        return this.perfumesRepository.find();
    }

    getPerfumeById(id: number): Promise<Perfumes> {
        return this.perfumesRepository.findOneBy({ id });
    }
}