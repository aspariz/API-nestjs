import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { get } from 'http';
import { BooksService } from './books.service.js';
import { Book } from './entities/book-entity.js';
import { CreateBookDto} from './dto/create-books-dto.js';

@Controller('books')
export class BooksController {

    constructor(private readonly booksService: BooksService) { }

    @Get()
    findAll() {
        return this.booksService.findAll();
    }

    @Post()
    simpanData(@Body() createBookDto: CreateBookDto) {
        return this.booksService.simpanData(createBookDto);
    }

    @Put(':id')
    updateData(@Param('id') id: string, @Body() updateBookDto: CreateBookDto) {
        return this.booksService.updateData(Number(id), updateBookDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.booksService.remove(Number(id));
    }
}