import { Component } from '@angular/core';
import {Book} from "../../models/Book";
import {BookCdService} from "../../services/book-cd.service";
import {MenuController, ModalController} from "ionic-angular";
import {LendBookPage} from "../lend-book/lend-book";
import {LendCdPage} from "../lend-cd/lend-cd";

@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html'
})
export class CdListPage {
  cdList: Book[];

  constructor(private modalCtrl: ModalController,
              private bookCdService: BookCdService,
              private menuCtrl: MenuController){

  }

  ionViewWillEnter(){
    this.cdList = this.bookCdService.cdList.slice();
  }

  onLoadCd(index: number){
    const modal = this.modalCtrl.create(LendCdPage, { index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

}
