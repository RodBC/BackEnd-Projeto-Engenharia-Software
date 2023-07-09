import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { v4 as uuidv4 } from 'uuid4';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const {name, email, array_of_groups} = createUserDto;
    const user = {
      id: uuidv4(),
      name: name,
      email: email,
      array_of_groups: array_of_groups
    };
    return this.userRepository.save(user);
  }
}