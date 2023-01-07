export type CreateRecetteCategoryParams = {
    titre: string;
    description: string;
    temps_preparation: number;
    temps_cuisson: number;
    niveau: string;
    ingredients: string;
}

export type CreateEtapeRecetteParams = {
    description: string;
    ordre: number;
}