import {
  IsNotEmpty,
  IsPositive,
  IsString
} from 'class-validator';
import { ProductEntity } from 'src/products/entities/product.entity';

export class UpdateCarrinhoDto{
    @IsNotEmpty()
    Products: ProductEntity[];
}