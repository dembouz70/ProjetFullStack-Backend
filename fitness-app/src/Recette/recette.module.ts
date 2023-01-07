import { Module } from '@nestjs/common';
import { CategoryModule } from 'src/Category/category.module';
import { UserModule } from 'src/Users/user.module';
import { UserRepository } from 'src/Users/user.repository';
import { RecetteController } from './recette.controller';
import { RecetteRepository } from './recette.repository';
import { RecetteService } from './recette.service';

@Module({
  imports:[UserModule, CategoryModule],
  controllers: [RecetteController],
  providers: [RecetteService, RecetteRepository],
  exports: [RecetteRepository]
})
export class RecetteModule {}