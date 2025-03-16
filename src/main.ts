import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.enableCors({
    origin: [],
    credentals: false,
  });

  // npm install @nestjs/terminus

  const config = new DocumentBuilder()
    .setTitle('NestJS oneday')
    .setDescription('The NestJS oneday API description')
    .setVersion('1.0')
    .addTag('oneday')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 8001);
}
void bootstrap();

/* 
os 경로 문제 발생 시
$ pwd
$ sudo chown -R 'whoami' ${경로}
*/
