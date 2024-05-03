import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { EntryService } from './database/entry.service';
import { DatabaseModule } from './database/database.module';
import { Entry } from './database/entry.entity';
import { DatabaseSetupService } from './database/database-setup.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([Entry]),
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [EntryService, DatabaseSetupService],
})
export class AppModule {}
