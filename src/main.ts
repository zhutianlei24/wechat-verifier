import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    bodyParser.xml({
      xmlParseOptions: {
        explicitArray: false,
      },
    }),
  );

  await app.listen(3000);
}
bootstrap();
