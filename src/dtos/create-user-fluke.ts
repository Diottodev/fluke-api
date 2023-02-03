import {
  IsNotEmpty,
  IsDate,
  Length,
  IsEmail,
  IsString,
  IsBoolean,
  Matches,
} from 'class-validator';
import { Match } from '../decorators/match.decorator';

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
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/, {
    message:
      'senha deve conter: 8 caracteres no mínimo, 1 letra maiúscula no mínimo, 1 número no mínimo e caracter especial no mínimo',
  })
  @Length(8, 40, { message: 'Senha deve conter no mínimo 8 caracteres' })
  password?: string;

  @IsNotEmpty({ message: 'Campo obrigatório' })
  @Match('password', { message: 'Senhas não condizem' })
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
