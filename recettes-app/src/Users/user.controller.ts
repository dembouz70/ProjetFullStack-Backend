import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { CreateUserDto } from "./dto/create-user.dto";
import User from "./entity/user.entity";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    //Recuperer tous les utilisateurs
    @Get()
    async getUsers(): Promise<User[]> {
        return this.userService.getUsers()
    }
    
    //Enregistrer un nouvel utilisateur
    @Post()
    store(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }

    //Recuperer un seul
    @Get('/:id')
    getOneUser(@Param("id") userid: number) {
        return this.userService.showUser(Number(userid));
    }
    
    @Delete('/:id')
    remove(@Param('id') id: number) {
        return this.userService.removeUser(Number(id))
    }
}