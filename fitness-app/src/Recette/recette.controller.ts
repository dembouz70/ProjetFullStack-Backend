import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Req, UseGuards } from "@nestjs/common";
import { CreateRecetteDto } from "./dto/create-recette.dto";
import Recette from "./recette.entity";
import { RecetteService } from "./recette.service";
import { AuthGuard } from "@nestjs/passport";

@Controller('recettes')
export class RecetteController {
    constructor(private readonly recetteService: RecetteService) { }
    //Recuperer toutes les recettes
    @Get()
    async getAll(): Promise<Recette[]> {
        return this.recetteService.getAllRecettes()
    }

    //Recuperer toutes les recettes avec categories
    @Get('recetteCatg')
    async getAllRecettesCategories() {
        return this.recetteService.getAllCategoriesRecettes()
    }

    //Recuperer des recettes d'une categorie
    @Get('category/:id')
    getOneRecettesCategories(@Param("id") id: number) {
        return this.recetteService.getOneCategoriesRecettes(Number(id))
    }

    @UseGuards(AuthGuard('local'))
    @Post('auth/login')
    async login(@Req() req) {
        return req.user;
    }

    //Recuperer une recette
    @Get('/:id')
    getOneRecette(@Param("id") Etudiantid: number): Promise<Recette[]> {
        return this.recetteService.getOneRecette(Number(Etudiantid));
    }
    //Supprimer une recette
    @Delete('/:id')
    remove(@Param('id') id: number) {
        return this.recetteService.removeRecette(Number(id))
    }

    @Post('create/:id')
    async createRecette(@Param("id", ParseIntPipe) categoryId: number, @Body() rData: CreateRecetteDto) {
        return this.recetteService.createRecette(categoryId, rData);
    }
}
