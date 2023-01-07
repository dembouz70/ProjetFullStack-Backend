import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Recette } from '../Recette/recette.entity';

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    titre_Cat : string

    @OneToMany(() => Recette, (recette) => recette.id)
    recettes: Recette[]

}