import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  constructor(private readonly httpService: HttpService) {}

  @Cron('*/13 * * * *')
  pingServer() {
    this.logger.log('Pinging the server to keep it awake...');
    this.httpService.get('https://solinity.onrender.com/api/tokens').subscribe({
      next: (response) => this.logger.log('Ping successful', response.status),
      error: (err) => this.logger.error('Ping failed', err),
    });
  }
}
