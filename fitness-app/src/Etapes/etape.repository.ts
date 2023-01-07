import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import {Etape} from "./etape.entity";

@Injectable()
export class EtapeRepository extends Repository<Etape> {
    constructor(private datasource: DataSource) {
        super(Etape, datasource.createEntityManager());
    }
}