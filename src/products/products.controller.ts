import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}

    @HttpCode(HttpStatus.CREATED)
    @Get()
    findAll(@Query() pagination:any){
        this.productsService.findAll(pagination);
        return  this.productsService.findAll(pagination);
    }

    @Get(":id")
    findOne(@Param('id') id: number){
        return  this.productsService.findAll(id);
    }  

    @Post()
    create(@Body() body: any){
        return  this.productsService.create(body);
    }

    @Patch(':id')
    update(@Body() body:any, @Param() id:any){
        return  this.productsService.update(id, body);
    }

    @Delete(':id')
    remove(@Param() id:any){
        return  this.productsService.remove(id);
    }

}
