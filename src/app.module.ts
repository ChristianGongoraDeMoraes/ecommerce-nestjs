import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { PessoasModule } from './pessoas/pessoas.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    database: 'nestecommerce',
    password: '4',
    autoLoadEntities: true,
    synchronize: true,
  }),ProductsModule, AuthModule, PessoasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
