import { Injectable } from "@nestjs/common";
import { Category } from "./category.entity";
import { CategoryRepository } from "./category.repository";
import { CreateCategoryDto } from "./create-category.dto";

@Injectable()
export class CategoryService {
    constructor(
        private readonly categoryRepository: CategoryRepository) { };

    createCategory(createCategory: CreateCategoryDto) {
        return this.categoryRepository.save(createCategory);
    }

    //Recuperer toutes les categories de recettes
    getAllCategories(): Promise<Category[]> {
        return this.categoryRepository.find();
    }
    //Supprimer une categorie de recette
    removeCategory(catId: number) {
        return this.categoryRepository.delete(catId);
    }
}