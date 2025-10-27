import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}

    @HttpCode(HttpStatus.CREATED)
    @Get()
    findAll(@Query() pagination:any){
        const { offset, limit } = pagination; 
        return `essa rota retorna todos, offset ${offset}, limit ${limit}`
    }

    @Get(":id")
    findOne(@Param('id') id: number){
        return 'essa rota é um recado'
    }  

    @Post()
    create(@Body() body: any){
        return `${body}`;
    }

    @Patch(':id')
    update(@Body() body:any, @Param() id:any){
        return {
            id,
            ...body
        };
    }

    @Delete(':id')
    remove(@Param() id:any){
        return `essa rota apaga o id ${id}`;
    }

}
