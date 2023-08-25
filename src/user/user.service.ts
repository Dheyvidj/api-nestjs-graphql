import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserInput } from './dto/create-user';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(data: CreateUserInput): Promise<User> {
    const user = this.userRepository.create(data);
    const userSaved = await this.userRepository.save(user);

    if (!userSaved) {
      throw new InternalServerErrorException('Erro ao criar usuário');
    }

    return userSaved;
  }

  async getAllUsers(): Promise<User[]> {
    const users = this.userRepository.find();

    if (!users) {
      throw new InternalServerErrorException('Nenhum usuário encontrado');
    }

    return users;
  }
}
