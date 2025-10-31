import { Injectable, NotFoundException } from '@nestjs/common';
import { CompraEntity } from './entities/product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCompraDto } from './dto/create-compra.dto';
import { PessoasService } from 'src/pessoas/pessoas.service';
import { Pessoa } from 'src/pessoas/entities/pessoa.entity';

@Injectable()
export class CompraService {
    constructor(
        @InjectRepository(CompraEntity)
        private readonly compraRepository: Repository<CompraEntity>,
        private readonly pessoaService: PessoasService){}
    
        throwNotFoundError() {
            throw new NotFoundException('Compra não encontrada');
        }
    
        async findAll(){
        const products = await this.compraRepository.find();
        return products;
      }
    
      async findAllByPessoaId(id: number){
        const compras = this.compraRepository.find({
          where: {
            Pessoa_id:  id,
          }});
        
        if (!compras) this.throwNotFoundError();
    
        return compras;
      }
    
      async create( createproductDto: CreateCompraDto){
        let  total = 0
        for(let item of createproductDto.produtos){
            total += item.price
        }
       
        const pessoa = await this.pessoaService.findOne(createproductDto.Pessoa_id);
        const novocompra = {
          cpf: createproductDto.cpf,
          Pessoa_id: createproductDto.Pessoa_id,
          produtos: createproductDto.produtos,
          total_price: total
        };
    
        const product = this.compraRepository.create(novocompra);
        await this.compraRepository.save(product);
    
        return novocompra;
      }
}
