import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddPerfumeDto, UpdatePerfumeDto } from './perfumes.dto';
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

    async addPerfume(addPerfumeDto: AddPerfumeDto): Promise<void> {
        await this.perfumesRepository.insert(addPerfumeDto);
    }

    async updatePerfumeById(id: number, updatePerfumeDto: UpdatePerfumeDto): Promise<void> {
        await this.perfumesRepository.update(id, updatePerfumeDto);
    }

    async deletePerfumeById(id: number): Promise<void> {
        await this.perfumesRepository.delete(id);
    }
}