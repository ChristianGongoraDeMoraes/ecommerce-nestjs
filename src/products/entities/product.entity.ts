import { CarrinhoEntity } from "src/carrinho/entities/carrinho.entity";
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

    @ManyToMany(() => CarrinhoEntity, carrinho => carrinho.Products)
    carrinhos: CarrinhoEntity[];
}