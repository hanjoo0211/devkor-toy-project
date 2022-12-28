import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvVars } from 'common/interface';
import { PerfumesService } from './perfumes/perfumes.service';
import { PerfumesModule } from './perfumes/perfumes.module';
import { ReviewsService } from './reviews/reviews.service';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
    imports: [
        UsersModule,
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRootAsync({
        useFactory: (config: ConfigService<EnvVars>) => ({
            type: 'postgres',
            url: config.get('DB_URL'),
            synchronize: config.get('DB_SYNC'),
            autoLoadEntities: true,
        }),
        inject: [ConfigService],
        }),
        PerfumesModule,
        ReviewsModule,
    ],
    controllers: [AppController, UsersController],
    providers: [AppService, UsersService, PerfumesService, ReviewsService],
})
export class AppModule {}
