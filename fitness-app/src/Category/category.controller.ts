import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Category } from "./category.entity";
import { CategoryService } from "./category.service";
import { CreateCategoryDto } from "./create-category.dto";

@Controller('Category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }
    //Recuperer toutes les categories de recette
    @Post('create')
    async getCatg(@Body() createCategoryDto: CreateCategoryDto) {
        return this.categoryService.createCategory(createCategoryDto);
    }

}
