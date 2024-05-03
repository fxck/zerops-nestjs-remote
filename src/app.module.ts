import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { EntryService } from './database/entry.service';
import { DatabaseModule } from './database/database.module';
import { DatabaseSetupService } from './database/database-setup.service';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule],
  controllers: [AppController],
  providers: [EntryService, DatabaseSetupService],
})
export class AppModule {}
