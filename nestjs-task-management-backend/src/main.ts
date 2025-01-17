import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import * as config from 'config';

console.log(`Application starting...`);
console.log(`Example process.env.NODE_ENV: `, process.env.NODE_ENV)
async function bootstrap() {
  const serverConfig: any = config.get('server');
  const logger = new Logger('bootstrap'); // bootstrap can be anything. It's just the context.
  const app = await NestFactory.create(AppModule); 

  if (process.env.NODE_ENV === 'development') {
    app.enableCors();
  } else {
    app.enableCors({
      origin: process.env.CLIENT_ORIGIN || serverConfig.origin,
    });
    logger.log(`Accepting requests from origin "${serverConfig.origin}"`);
  }

  const port = process.env.PORT || serverConfig.port;
  await app.listen(port);
  logger.log(`Application listening on port ${port}`); // log can also be verbose, warn, debug, error which just changes the color in the cli
}
bootstrap();
