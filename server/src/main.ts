import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Increase the payload size limit for JSON bodies
  app.use(bodyParser.json({ limit: '50mb' }));
  // Increase the payload size limit for URL-encoded bodies
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

  app.setGlobalPrefix('/api');

  app.enableCors({
    origin: 'http://localhost:3001',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Solker')
    .setDescription('Solana Presale Website')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}
bootstrap();
