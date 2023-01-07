import { Category } from "src/Category/category.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Etape } from '../Etapes/etape.entity';
import  User  from '../Users/entity/user.entity';

@Entity()
export class Recette {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    titre: string

    @Column()
    description: string

    @Column()
    temps_preparation: number

    @Column()
    temps_cuisson: number

    @Column('text')
    ingredients: string

    @Column()
    niveau: string

    @OneToMany(() => Etape, (etape) => etape.recette)
    etapes: Etape[];
    
    @ManyToOne(() => Category, category => category.recettes)
    @JoinColumn()
    category: Category;
}

export default Recette;