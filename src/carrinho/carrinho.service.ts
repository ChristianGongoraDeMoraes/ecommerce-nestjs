import { Injectable, NotFoundException } from '@nestjs/common';
import { CarrinhoEntity } from './entities/carrinho.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarrinhoDto } from './dto/Createcarrinhodto';
import { UpdateCarrinhoDto } from './dto/Updatecarrinhodto';
import { Pessoa } from 'src/pessoas/entities/pessoa.entity';
import { ProductEntity } from 'src/products/entities/product.entity';
import { PessoasService } from 'src/pessoas/pessoas.service';

@Injectable()
export class CarrinhoService {
        constructor(
        @InjectRepository(CarrinhoEntity)
        private readonly carrinhoRepository: Repository<CarrinhoEntity>,
        private readonly pessoaService: PessoasService){}
    
        throwNotFoundError() {
            throw new NotFoundException('Carrinho não encontrado');
        }
    
        async findAll(){
    
        const carrinhos = await this.carrinhoRepository.find({
            relations: ['Pessoa'],
        });
    
        return carrinhos;
      }
    
      async findOne(id: number){
        let pessoa = await this.pessoaService.findOne(id);

        if(!pessoa) throw new NotFoundException('Pessoa não encontrada');
        if(pessoa){
            let carrinho = await this.carrinhoRepository.findOne({
            where: {
                Pessoa_id: pessoa.id,
            },
            relations: ['Pessoa'],
            });
            
            if (!carrinho) this.throwNotFoundError();
        
            return carrinho;
        }
      }
    
      async create( createcarrinhoDto: CreateCarrinhoDto){
        let pessoa = await this.pessoaService.findOne(createcarrinhoDto.PessoaId);

        if(!pessoa) throw new NotFoundException('Pessoa não encontrada');
        if(pessoa){
            const novocarrinho = {
                Pessoa: pessoa,
                Pessoa_id: pessoa.id,
                Products: createcarrinhoDto.Products
            };
        
            const carrinho = await this.carrinhoRepository.create(novocarrinho);
            await this.carrinhoRepository.save(carrinho);
        
            return novocarrinho;
        }
      }
    
      async update(id: number, updatecarrinhoDto: UpdateCarrinhoDto){
         let pessoa = await this.pessoaService.findOne(id);
        if(!pessoa) throw new NotFoundException('Pessoa não encontrada');
        if(pessoa){
            const carrinho = await this.carrinhoRepository.findOne({
                where:{
                    Pessoa_id: pessoa.id,
                },
                relations: ['Pessoa'],
            });
            if(!carrinho) this.throwNotFoundError();
        
            if(carrinho){
                carrinho.Products = updatecarrinhoDto.Products;
                await this.carrinhoRepository.save(carrinho);
                return carrinho;
            }
        }
    }
    
      async remove(id: number){
        const carrinho = await this.carrinhoRepository.findOne({
            where:{
                id,
            },
            relations: ['Pessoa'],
        });
        if(!carrinho) this.throwNotFoundError()
    
        if(carrinho){
            await this.carrinhoRepository.delete(carrinho.id);
        
            return carrinho;
        }
      }
}
    
