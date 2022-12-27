import { Module } from '@nestjs/common';
import { PerfumesController } from './perfumes.controller';
import { PerfumesService } from './perfumes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Perfumes } from './perfumes.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Perfumes])],
    exports: [TypeOrmModule],
    controllers: [PerfumesController],
    providers: [PerfumesService]
})
export class PerfumesModule {}