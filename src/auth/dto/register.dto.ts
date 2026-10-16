import { IsNotEmpty } from "class-validator";

export class Register {
  @IsNotEmpty ({message: "email harus diisi"})
  readonly login: String;

  @IsNotEmpty ({message: "password harus diisi"})
  readonly password: String;



}






// export class RegisterDto {
//   name: string;
//   email: string;
//   password: string;
// }
