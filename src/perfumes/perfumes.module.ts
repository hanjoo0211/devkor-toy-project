import { Module } from '@nestjs/common';
import { PerfumesController } from './perfumes.controller';

@Module({
  controllers: [PerfumesController]
})
export class PerfumesModule {}
