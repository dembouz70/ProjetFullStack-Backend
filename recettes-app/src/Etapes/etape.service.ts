import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import Recette from "src/Recette/recette.entity";
import { RecetteRepository } from "src/Recette/recette.repository";
import { CreateEtapeRecetteParams } from "src/utils/types";
import { CreateEtapeDto } from "./create-etape.dto";
import {Etape}  from "./etape.entity";
import { EtapeRepository } from "./etape.repository";

@Injectable()
export class EtapeService {
  constructor(
    private readonly etapesRepository: EtapeRepository,
    private readonly recettesRepository: RecetteRepository
  ) { };

  //CREER UNE ETAPE

  async createEtape(id: number, etapesData: CreateEtapeRecetteParams) {
    const recette = await this.recettesRepository.findOneBy({ id });
    if (!recette)
      throw new HttpException(
        'Recette not found. Cannot create Recette',
        HttpStatus.BAD_REQUEST,
      );

    const newEtape = this.etapesRepository.create({
      ...etapesData,
      recette
    })
    return this.etapesRepository.save(newEtape)
  }

  //RETROUVER Etapes AVEC LEURS recettes associées
  getAllEtapes() {
    return this.etapesRepository.find({ relations: ['recette'] });
  }
}