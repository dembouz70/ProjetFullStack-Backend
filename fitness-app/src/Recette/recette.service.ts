import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import Recette from './recette.entity';
import UpdateRecetteDto from './dto/update-recette.dto';
import { RecetteRepository } from './recette.repository';
import { Etape } from 'src/Etapes/etape.entity';
import { CreateRecetteDto } from './dto/create-recette.dto';
import { Category } from 'src/Category/category.entity';
import { CategoryRepository } from 'src/Category/category.repository';
import { CreateCategoryDto } from 'src/Category/create-category.dto';
import { HttpException } from '@nestjs/common/exceptions';
import { CreateRecetteCategoryParams } from 'src/utils/types';

@Injectable()
export class RecetteService {
  constructor(
    private readonly recettesRepository: RecetteRepository,
    private readonly categoryRepository: CategoryRepository
  ) { };

  //Recuperer toutes les recettes
  getAllRecettes(): Promise<Recette[]> {
    return this.recettesRepository.find();
  }

  getOneRecette(idRecette: number): Promise<Recette[]> {
    const recette = this.recettesRepository.find({
      where: {
        id: idRecette
      }
    });

    if (!recette) {
      throw new NotFoundException();
    }
    return recette;
  }
  //Supprimer une recette
  removeRecette(recetteId: number) {
    return this.recettesRepository.delete(recetteId);
  }

  getAllFavoris() {
    return this.recettesRepository.find({ relations: ['favoriteRecipes'] });
  }

  //CREER UNE RECETTE

  async createRecette(id: number, recetteData: CreateRecetteCategoryParams,) {
    const category = await this.categoryRepository.findOneBy({ id });
    if (!category)
      throw new HttpException(
        'Category not found. Cannot create Recette',
        HttpStatus.BAD_REQUEST,
      );

    const newRecette = this.recettesRepository.create({
      ...recetteData,
      category
    })
    return this.recettesRepository.save(newRecette)
  }

  //RETROUVER RECETTES AVEC LEURS CATEGORIES INCLUSES
  getAllCategoriesRecettes() {
    return this.recettesRepository.find({ relations: ['category','etapes'] });
  }

  //RETROUVER RECETTES d'une categorie
  getOneCategoriesRecettes(catgId: number) {
    return this.recettesRepository.find({relations: ['category','etapes'], 
    where:{
      category :
        {
          id : catgId
        }
    } });
  }

}