import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 8001);
}
void bootstrap();

/* 
os 경로 문제 발생 시
$ pwd
$ sudo chown -R 'whoami' ${경로}
*/
