import { IsEmail, IsNumber, IsString } from "class-validator";

class UpdaterecetteDto {
    @IsString()
    titre: string;

    @IsString()
    description: string;

    @IsNumber()
    temps_preparation : number

    @IsNumber()
    temps_cuisson : number

    @IsString()
    niveau: string;
}

export default UpdaterecetteDto;