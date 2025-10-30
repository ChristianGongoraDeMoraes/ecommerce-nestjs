import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { CarrinhoService } from './carrinho.service';
import { CreateCarrinhoDto } from './dto/Createcarrinhodto';
import { UpdateCarrinhoDto } from './dto/Updatecarrinhodto';

@Controller('carrinho')
export class CarrinhoController {
        constructor(private readonly carrinhoService: CarrinhoService){}
    
        @HttpCode(HttpStatus.CREATED)
        @Get()
        findAll(){
            this.carrinhoService.findAll();
            return  this.carrinhoService.findAll();
        }
    
        @Get(":id")
        findOne(@Param('id') id: number){
            return  this.carrinhoService.findOne(id);
        }  
    
    
        @Post()
        create(@Body() body: CreateCarrinhoDto){
            return  this.carrinhoService.create(body);
        }
    
        @Patch(':id')
        update(@Body() body: UpdateCarrinhoDto, @Param('id') id:number){
            return  this.carrinhoService.update(id, body);
        }
    
        @Delete(':id')
        remove(@Param('id') id:number){
            return  this.carrinhoService.remove(id);
        }
    
}
    

