import { Module } from '@nestjs/common';
import { CarrinhoController } from './carrinho.controller';
import { CarrinhoService } from './carrinho.service';
import { Pessoa } from 'src/pessoas/entities/pessoa.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoasService } from 'src/pessoas/pessoas.service';
import { PessoasModule } from 'src/pessoas/pessoas.module';
import { CarrinhoEntity } from './entities/carrinho.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pessoa]),PessoasModule, TypeOrmModule.forFeature([CarrinhoEntity])],
  controllers: [CarrinhoController],
  providers: [CarrinhoService]
})
export class CarrinhoModule {}
