import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { CompraModule } from './compra/compra.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

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
  }),ProductsModule, AuthModule, PessoasModule, CarrinhoModule, CompraModule,
   ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, '..', 'pictures'),
      serveRoot: '/pictures',
    }),],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
