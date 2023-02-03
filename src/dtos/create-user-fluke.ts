import {
  IsNotEmpty,
  IsDate,
  Length,
  IsEmail,
  Equals,
  IsString,
  IsBoolean,
} from 'class-validator';

class CreateUserFlukeDTO {
  id?: string;

  @IsNotEmpty({ message: 'Campo obrigatório' })
  @IsEmail({ message: 'Campo deve conter um email válido' })
  email: string;

  @IsNotEmpty({ message: 'Campo obrigatório' })
  @Length(3, 20, { message: 'Nome deve conter no mínimo 3 letras' })
  name?: string;

  @IsNotEmpty({ message: 'Campo obrigatório' })
  @Length(3, 40, { message: 'Sobrenome deve conter no mínimo 3 letras' })
  lasName?: string;

  @IsNotEmpty({ message: 'Campo obrigatório' })
  @Length(8, 40, { message: 'Senha deve conter no mínimo 8 caracteres' })
  password?: string;

  @IsNotEmpty({ message: 'Campo obrigatório' })
  @Equals('password', { message: 'Senhas não condizem' })
  firmPassword?: string;

  @IsNotEmpty({ message: 'Campo obrigatório' })
  @IsDate({ message: 'Campo deve ser uma data válida' })
  birthDate?: string;

  @IsBoolean()
  isOnline: boolean;

  @IsString()
  bio?: string;
}

export default CreateUserFlukeDTO;
