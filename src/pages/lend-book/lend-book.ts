import {Component, OnInit} from "@angular/core";
import {Book} from "../../models/Book";
import {NavParams, ViewController} from "ionic-angular";
import {BookCdService} from "../../services/book-cd.service";

@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html'
})
export class LendBookPage implements OnInit {

  index: number;
  book : Book;

  constructor(public navParams: NavParams,
              public viewCtrl: ViewController,
              public bookCdService: BookCdService){

  }

  ngOnInit(){
    this.index = this.navParams.get('index');
    this.book = this.bookCdService.bookList[this.index];
  }

  dismissModal(){
    this.viewCtrl.dismiss();
  }

  onToggleLend(){
    this.book.isLend = !this.book.isLend;
  }

}
