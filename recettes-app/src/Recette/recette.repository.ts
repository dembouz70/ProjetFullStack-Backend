import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import Recette from "src/Recette/recette.entity";

@Injectable()
export class RecetteRepository extends Repository<Recette> {
    constructor(private datasource: DataSource) {
        super(Recette, datasource.createEntityManager());
    }
}