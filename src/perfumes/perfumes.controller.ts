import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PerfumesService } from './perfumes.service';
import { Perfumes } from './perfumes.entity';

@Controller('perfumes')
export class PerfumesController {
    constructor(private readonly perfumesService: PerfumesService) {}

    @Get()
    getPerfumes(): Promise<Perfumes[]> {
        return this.perfumesService.getPerfumes();
    }

    @Get(':id')
    getPerfumeById(@Param('id') id: number): Promise<Perfumes> {
        return this.perfumesService.getPerfumeById(id);
    }
}
