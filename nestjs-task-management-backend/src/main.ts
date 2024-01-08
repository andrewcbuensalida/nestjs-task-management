import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import * as config from 'config';

console.log(`Application starting...`);
async function bootstrap() {
  
  const serverConfig:any = config.get('server');
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule); // TODO this is causing console.log not to work after this line
  console.log('hello????????????????????????????');
  
  console.log(`Example process.env.NODE_ENV: `, process.env.NODE_ENV)
  if (process.env.NODE_ENV === 'development') {
    app.enableCors();
  } else {
    app.enableCors({ origin: serverConfig.origin });
    logger.log(`Accepting requests from origin "${serverConfig.origin}"`);
  }

  const port = process.env.PORT || serverConfig.port;
  await app.listen(port);
  logger.log(`Application listening on port ${port}`);
  console.log(`Application listening on port ${port}`);
}
bootstrap();
