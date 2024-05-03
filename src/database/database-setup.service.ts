// src/database/database-setup.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Injectable()
export class DatabaseSetupService implements OnModuleInit {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  async onModuleInit() {
    await this.setupDatabase();
  }

  private async setupDatabase() {
    const tableExists = await this.connection.query(`
      SELECT EXISTS (
        SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'entries'
      );
    `);

    if (!tableExists[0].exists) {
      await this.connection.query(`
        CREATE TABLE entries (
          id SERIAL PRIMARY KEY,
          data TEXT NOT NULL
        );
      `);
    }
  }
}
