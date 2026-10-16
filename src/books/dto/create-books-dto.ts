import { IsNotEmpty } from "class-validator";

export class CreateBooksDto {
    @IsNotEmpty ({message: 'title harus diisi'})
    readonly title: String;

    @IsNotEmpty ({message: 'Autor wajib diisi'})
    readonly author: String;

    @IsNotEmpty({message: 'ISBN harus diisi'})
    readonly isbn: String;


    readonly publishedYear: number;
}

// export class CreateBookDto {
//     readonly title: string;
//     readonly author: string;
//     readonly isbn: string;
//     readonly publishedYear: number;
//     isAvailable: boolean;
// }