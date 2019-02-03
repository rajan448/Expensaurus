import { Component, OnInit } from '@angular/core';
import { ViewController } from '@ionic/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-search-expenses',
  templateUrl: './search-expenses.component.html',
  styleUrls: ['./search-expenses.component.scss']
})
export class SearchExpensesComponent implements OnInit {


  public name: string=''
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  closeModal(name?: string) {
    if(name) {
      this.modalCtrl.dismiss({searchParamName: this.name})
    } else {
      this.modalCtrl.dismiss();
    }
    
  }

}
