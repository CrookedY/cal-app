import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import { AppController } from './app.controller';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [RenderModule],
  controllers: [AppController, CatsController]
})
export class AppModule {}
