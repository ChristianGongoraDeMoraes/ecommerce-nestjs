import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductEntity } from './entities/product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDto } from './dto/PaginationDto';
import { UpdateProductDto } from './dto/UpdateProductDto';
import { CreateProductDto } from './dto/CreateProductDto';

@Injectable()
export class ProductsService {
    //throw new HttpException("message", HttpStatus.NotFound)
    constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>){}

    throwNotFoundError() {
        throw new NotFoundException('Produto não encontrado');
    }

    async findAll(paginationDto?: PaginationDto){

    const products = await this.productRepository.find({
      take: paginationDto?.limit || 10, // quantos registros serão exibidos (por página)
      skip: paginationDto?.offset || 0, // quantos registros devem ser pulados
    });

    return products;
  }

  async findOne(id: number){
    const product = this.productRepository.findOne({
      where: {
        id,
      }
    });
    
    if (!product) this.throwNotFoundError();

    return product;
  }

  async create( createproductDto: CreateProductDto){
    const novoproduct = {
      name: createproductDto.name,
      price: createproductDto.price,
      amount_on_storage: createproductDto.amount_on_storage,
      description: createproductDto.description
    };

    const product = this.productRepository.create(novoproduct);
    await this.productRepository.save(product);

    return novoproduct;
  }

  async update(id: number, updateProductDto: UpdateProductDto){
    const produto = await this.productRepository.findOne({
        where:{
            id,
        }    
    });
    if(!produto) this.throwNotFoundError();

    if(produto){
        produto.name = updateProductDto?.name ?? produto.name;
        produto.price = updateProductDto?.price ?? produto.price;
        produto.amount_on_storage = updateProductDto?.amount_on_storage ?? produto.amount_on_storage
        produto.description = updateProductDto?.description ?? produto.description
           
        await this.productRepository.save(produto);
        return produto;
    }
  }

  async remove(id: number){
    const produto = await this.productRepository.findOne({
        where:{
            id,
        }    
    });
    if(!produto) this.throwNotFoundError()

    if(produto){
        await this.productRepository.delete(produto.id);
    
        return produto;
    }
  }
}
