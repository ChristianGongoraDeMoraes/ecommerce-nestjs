import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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