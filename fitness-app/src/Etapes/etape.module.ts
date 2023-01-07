import { Module } from '@nestjs/common';
import { RecetteModule } from 'src/Recette/recette.module';
import { RecetteRepository } from 'src/Recette/recette.repository';
import { EtapeController } from './etape.controller';
import { EtapeRepository } from './etape.repository';
import { EtapeService } from './etape.service';

@Module({
  imports: [RecetteModule],
  controllers: [EtapeController],
  providers: [EtapeService, EtapeRepository],
  
})
export class EtapeModule {}