import { Injectable } from '@nestjs/common';
// import { Book } from '../module/book-entity';
import { Book } from '../books/entities/book-entity.js';

@Injectable()
export class PubsService {
    private books: Book[] = [
        {
            id: 1,
            title: 'The Great Gatsby',  
            author: 'F. Scott Fitzgerald',
            isbn: '978-0-7432-7356-5',
            publishedYear: 1925,
            isAvailable: true
        },
        {
            id: 2,
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            isbn: '978-0-06-112008-4',
            publishedYear: 1960,
            isAvailable: true
        }                   
    ];

    getAllBooks(): Book[] {
        return this.books;
    }
}
