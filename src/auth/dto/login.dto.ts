import { isNotEmpty, IsNotEmpty } from "class-validator";

export class LoginDto {
  @IsNotEmpty ({message: "emailharus diisi"})
  readonly login: String;

  @IsNotEmpty ({message: "password harus diisi"})
  readonly password: String;



}




// export class LoginDto {
//   email: string;
//   password: string;
// }
