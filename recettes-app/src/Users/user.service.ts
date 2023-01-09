import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import User from './entity/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {};

  getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  createUser(createUserDto : CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  updateUser(updateUserDto: UpdateUserDto, userId: number) {
    return { body : updateUserDto, userId };
  }

  showUser( userId: number) {
    return this.userRepository.findOne({
      where: {id: userId}
    });
  }

  findByEmail( email: string) {
    return this.userRepository.findOne({
      where: {email: email}
    });
  }

  removeUser(userid: number) {
    return this.userRepository.delete(userid);
  }
}