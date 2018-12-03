import {Component, OnInit} from "@angular/core";
import {Cd} from "../../models/Cd";
import {NavController, NavParams, ViewController} from "ionic-angular";
import {BookCdService} from "../../services/book-cd.service";

@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html'
})
export class LendCdPage implements OnInit{

  index: number;
  cd: Cd;

  constructor(public navParams: NavParams,
              public viewCtrl: ViewController,
              public bookCdService: BookCdService){

  }

  ngOnInit(){
    this.index = this.navParams.get('index');
    this.cd = this.bookCdService.cdList[this.index];
  }
  dismissModal(){
    this.viewCtrl.dismiss();
  }

  onToggleLend(){
    this.cd.isLend = !this.cd.isLend;
  }
}
