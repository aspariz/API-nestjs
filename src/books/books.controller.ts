import { Controller, Get, Post, Put, Delete, Param} from '@nestjs/common';

@Controller('books') //decorator to define the route for this controller
export class BooksController {

    //get
@Get()
getBooks(): string {
    return 'This action returns all books';
  }

  //simmpan data

@Post()
createBook(): string {
    return 'This action adds a new book';
  }  

  //update data
@Put(':id')
  updateBook(@Param('id') id: string): string {
    return 'This action updates a book';
  }
    //delete data

 @Delete(':id')
  deleteBook(@Param('id') id: string): string {
    return 'This action deletes a book';
  }
}
