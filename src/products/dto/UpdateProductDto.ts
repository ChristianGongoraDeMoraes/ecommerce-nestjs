import {
  IsPositive,
  IsString
} from 'class-validator';

export class UpdateProductDto{

    @IsString()
    name:string;

    @IsPositive()
    price:number;

    @IsPositive()
    amount_on_storage:number;

    @IsString()
    description:string;
}