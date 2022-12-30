import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PerfumesService } from './perfumes.service';
import { AddPerfumeDto, UpdatePerfumeDto } from './perfumes.dto';
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

    @Post()
    addPerfume(@Body() addPerfumeDto: AddPerfumeDto): Promise<void> {
        return this.perfumesService.addPerfume(addPerfumeDto);
    }

    @Put(':id')
    updatePerfume(@Param('id') id: number, @Body() updatePerfumeDto: UpdatePerfumeDto): Promise<void> {
        return this.perfumesService.updatePerfumeById(id, updatePerfumeDto);
    }

    @Delete(':id')
    deletePerfume(@Param('id') id: number): Promise<void> {
        return this.perfumesService.deletePerfumeById(id);
    }
}
