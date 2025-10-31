import { Module } from '@nestjs/common';
import { CompraService } from './compra.service';
import { CompraController } from './compra.controller';
import { CompraEntity } from './entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pessoa } from 'src/pessoas/entities/pessoa.entity';
import { PessoasModule } from 'src/pessoas/pessoas.module';

@Module({
  imports: [TypeOrmModule.forFeature([CompraEntity]),TypeOrmModule.forFeature([Pessoa]),PessoasModule,],
  providers: [CompraService],
  controllers: [CompraController],

})
export class CompraModule {}
