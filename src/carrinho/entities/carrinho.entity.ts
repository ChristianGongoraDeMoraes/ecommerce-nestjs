import { Pessoa } from "src/pessoas/entities/pessoa.entity";
import { ProductEntity } from "src/products/entities/product.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CarrinhoEntity{
    @PrimaryGeneratedColumn()
    id: number;
    
    @OneToOne(type => Pessoa)
    @JoinColumn()
    Pessoa: Pessoa;

    @Column()
    Pessoa_id: number;

    @Column({ type: 'jsonb', default: () => "'[]'" })
    Products: ProductEntity[];
}