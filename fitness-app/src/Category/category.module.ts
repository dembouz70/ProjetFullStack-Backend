import { Module } from '@nestjs/common';
import { RecetteModule } from 'src/Recette/recette.module';
import { RecetteRepository } from 'src/Recette/recette.repository';
import { CategoryController } from './category.controller';
import { CategoryRepository } from './category.repository';
import { CategoryService } from './category.service';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, CategoryRepository],
  exports: [CategoryRepository]
})
export class CategoryModule {}