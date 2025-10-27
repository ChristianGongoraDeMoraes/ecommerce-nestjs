import {
  IsNotEmpty,
  IsPositive,
  IsString
} from 'class-validator';

export class CreateProductDto{
    
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsPositive()
    price:number;

    @IsPositive()
    amount_on_storage:number;

    @IsString()
    @IsNotEmpty()
    description:string;
}