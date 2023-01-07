import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './Category/category.module';
import { EtapeModule } from './Etapes/etape.module';
import { RecetteModule } from './Recette/recette.module';
import { UserModule } from './Users/user.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [UserModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'recettes_db',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
    autoLoadEntities: true,
    
  }),RecetteModule, CategoryModule, EtapeModule, AuthModule, ProfileModule],
  controllers: [],
  providers: [],
})

export class AppModule { }
