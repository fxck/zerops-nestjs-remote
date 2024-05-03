import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfigService } from '../config/config.service';
import { Entry } from './entry.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Entry]),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: DatabaseConfigService) => ({
        type: 'postgres',
        host: configService.host,
        port: configService.port,
        username: configService.username,
        password: configService.password,
        database: configService.database,
        entities: [Entry],
        synchronize: true, // For development purposes only
      }),
      inject: [DatabaseConfigService],
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
