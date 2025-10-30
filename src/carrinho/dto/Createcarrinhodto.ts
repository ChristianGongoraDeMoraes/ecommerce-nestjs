import {
  IsNotEmpty,
  IsPositive,
  IsString
} from 'class-validator';
import { ProductEntity } from 'src/products/entities/product.entity';

export class CreateCarrinhoDto{
    @IsNotEmpty()
    PessoaId: number;
    @IsNotEmpty()
    Products: ProductEntity[];
}