import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'Name não pode ser vazio' })
  @Field()
  name: string;
  @IsString()
  @IsEmail()
  @IsNotEmpty({ message: 'Email nãom pode ser vazio' })
  @Field()
  email: string;
}
