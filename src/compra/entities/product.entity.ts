import { CarrinhoEntity } from "src/carrinho/entities/carrinho.entity";
import { Pessoa } from "src/pessoas/entities/pessoa.entity";
import { ProductEntity } from "src/products/entities/product.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CompraEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cpf: string;
    
    @Column()
    total_price: number;

    @Column()
    Pessoa_id: number;

    @Column({ type: 'jsonb', default: () => "'[]'" })
    produtos: ProductEntity[];
}