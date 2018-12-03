import {Component} from "@angular/core";
import {Book} from "../../models/Book";
import {MenuController, ModalController} from "ionic-angular";
import {BookCdService} from "../../services/book-cd.service";
import {LendBookPage} from "../lend-book/lend-book";

@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html'
})
export class BookListPage{

  bookList: Book[];

  constructor(private modalCtrl: ModalController,
              private bookCdService: BookCdService,
              private menuCtrl: MenuController){

  }

  ionViewWillEnter(){
    this.bookList = this.bookCdService.bookList.slice();
  }

  onLoadBook(index: number){
    const modal = this.modalCtrl.create(LendBookPage, { index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

}
