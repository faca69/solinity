import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { TokensModule } from './tokens/tokens.module';
import { ScheduleModule } from '@nestjs/schedule';
import { HttpModule } from '@nestjs/axios';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    TokensModule,
    ScheduleModule.forRoot(),
    HttpModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
