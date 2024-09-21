import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  constructor(private readonly httpService: HttpService) {}

  @Cron('*/13 * * * *')
  handleCron() {
    this.logger.log('Running every 13 minutes...');
    this.httpService.get('http://solinity/xyz').subscribe({
      next: (response) => {
        this.logger.log(`Response received: ${response.data}`);
      },
      error: (err) => {
        this.logger.error('Error making request:', err);
      },
    });
  }
}
