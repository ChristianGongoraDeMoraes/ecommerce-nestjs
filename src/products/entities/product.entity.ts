import { CarrinhoEntity } from "src/carrinho/entities/carrinho.entity";
import { CompraEntity } from "src/compra/entities/product.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    price: number;
    
    @Column()
    amount_on_storage: number;
    
    @Column()
    description: string;
}