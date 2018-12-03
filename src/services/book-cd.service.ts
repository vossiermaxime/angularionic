import {Book} from "../models/Book";
import {Cd} from "../models/Cd";

export class BookCdService{
  bookList: Book[] =[
    {
      name: 'Harry Potter I',
      isLend: false
    },
    {
      name: 'Psychologie de la connerie',
      isLend: true
    },
    {
      name: 'Le retour',
      isLend: true
    }
  ];

  cdList: Cd[] = [
    {
      name: 'Bob Marley',
      isLend: true
    },
    {
      name: 'David Guetta',
      isLend: true
    },
    {
      name: 'La fête est finie',
      isLend: false
    }
  ];


}
