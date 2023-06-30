import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserInterface } from "./user.model";
import { v4 as uuidv4 } from 'uuid4';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto): UserInterface {
    const {name, email} = createUserDto;
    
    const user = {
      id: uuidv4(),
      name: name,
      email: email
    };
    
    return user;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
