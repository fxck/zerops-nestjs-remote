import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Entry } from './entry.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class EntryService {
  constructor(
    @InjectRepository(Entry)
    private readonly entryRepository: Repository<Entry>,
  ) {}

  async addEntry(): Promise<{ message: string; data: string; count: number }> {
    const data = uuidv4();
    await this.entryRepository.insert({ data });

    const count = await this.entryRepository.count();
    return {
      message: 'Entry added successfully with random data.',
      data: data,
      count: count,
    };
  }

  async getStatus(): Promise<{ status: string }> {
    return { status: 'UP' };
  }
}
