import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { TokensModule } from './tokens/tokens.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    TokensModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
