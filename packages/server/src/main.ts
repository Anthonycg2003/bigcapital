import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ClsMiddleware } from 'nestjs-cls';
import * as path from 'path';
import { types as pgTypes } from 'pg';
import './utils/moment-mysql';

// Postgres returns bigint as a string. Objection schemas expect an integer.
const parsePgInteger = (value: string | null) =>
  value === null ? null : Number.parseInt(value, 10);
pgTypes.setTypeParser(20, parsePgInteger);
pgTypes.setTypeParser(21, parsePgInteger);
import { AppModule } from './modules/App/App.module';
import { NestExpressApplication } from '@nestjs/platform-express';

global.__public_dirname = path.join(__dirname, '..', 'public');
global.__static_dirname = path.join(__dirname, '../static');
global.__views_dirname = path.join(global.__static_dirname, '/views');
global.__images_dirname = path.join(global.__static_dirname, '/images');

export async function createApp() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    rawBody: true,
  });
  app.set('query parser', 'extended');
  app.setGlobalPrefix('/api');

  // create and mount the middleware manually here
  app.use(new ClsMiddleware({}).use);

  const config = new DocumentBuilder()
    .setTitle('Bigcapital')
    .setDescription('Financial accounting software')
    .setVersion('1.0')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, documentFactory);
  await app.init();

  return app;
}

if (require.main === module) {
  createApp().then((app) => app.listen(process.env.PORT ?? 3000));
}
