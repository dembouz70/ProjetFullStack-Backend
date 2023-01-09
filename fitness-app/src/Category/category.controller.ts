import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Category } from "./category.entity";
import { CategoryService } from "./category.service";
import { CreateCategoryDto } from "./create-category.dto";

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }
    //Recuperer toutes les categories de recette
    @Get()
    async getAllCatg(): Promise<Category[]> {
        return this.categoryService.getAllCategories()
    }

    //Enregistrer une categorie
    @Post('create')
    async getCatg(@Body() createCategoryDto: CreateCategoryDto) {
        return this.categoryService.createCategory(createCategoryDto);
    }

    //Supprimer une categorie
    @Delete('/:id')
    remove(@Param('id') id: number) {
        return this.categoryService.removeCategory(Number(id))
    }

}
