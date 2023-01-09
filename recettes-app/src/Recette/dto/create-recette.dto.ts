export class CreateRecetteDto {
    id : number;
    titre : string;
    description : string;
    temps_preparation : number;
    temps_cuisson : number;
    niveau : string;
    category: string;
    ingredients: string;
}