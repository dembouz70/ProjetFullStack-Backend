import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Req, UseGuards } from "@nestjs/common";
import { CreateEtapeDto } from "./create-etape.dto";
import { EtapeService } from "./etape.service";

@Controller('etapes')
export class EtapeController {
    constructor(private readonly etapeService: EtapeService) { }

    //Creer une etape de recettes
    @Post('create/:id')
    async createEtape(@Param("id", ParseIntPipe) recetteId: number, @Body() EtapeData: CreateEtapeDto) {
        return this.etapeService.createEtape(recetteId, EtapeData);
    }

    //Recuperer toutes les recettes avec categories
    @Get()
    async getAllEtapesRecettes() {
        return this.etapeService.getAllEtapes()
    }
}
