import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // Ativa o ValidationPipe globalmente
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove propriedades que não estão no DTO
      forbidNonWhitelisted: true, // lança erro se vier campos extras
      transform: true, // converte tipos automaticamente (ex: string -> number)
      exceptionFactory: (errors) => {
        // Personaliza o formato do erro
        return {
          statusCode: 400,
          message: 'Erro de validação nos dados enviados',
          errors: errors.map((err) => ({
            campo: err.property,
            erros: Object.values(err.constraints || {}),
          })),
        };
      },
    }),
  );
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
