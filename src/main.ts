import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { CommandFactory } from 'nest-commander';

async function bootstrap() {
  await CommandFactory.run(AppModule, ['warn', 'error', 'debug', 'log']);
}
bootstrap();
