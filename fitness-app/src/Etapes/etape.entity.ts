import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Recette } from '../Recette/recette.entity';

@Entity()
export class Etape {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    description: string

    @Column({ unique: true })
    ordre: number

    @ManyToOne(() => Recette, recette => recette.etapes)
    @JoinColumn()
    public recette: Recette;
}