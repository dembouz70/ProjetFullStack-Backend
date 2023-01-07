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

    
}