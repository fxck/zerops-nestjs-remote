// src/app.controller.ts
import { Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { EntryService } from './database/entry.service';

@Controller()
export class AppController {
  constructor(private readonly entryService: EntryService) {}

  @Post('/')
  async addEntry(@Res() res: Response) {
    const result = await this.entryService.addEntry();
    return res.status(201).send(result);
  }

  @Get('/status')
  async getStatus(@Res() res: Response) {
    const result = await this.entryService.getStatus();
    return res.status(200).send(result);
  }
}
