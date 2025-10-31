import {
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ProductEntity } from 'src/products/entities/product.entity';

export class CreateCompraDto {
      @IsNotEmpty()
      cpf: string;
      
      @IsNumber()
      total_price: number

      @IsNotEmpty()
      Pessoa_id: number;
  
      @IsNotEmpty()
      produtos: ProductEntity[];
}