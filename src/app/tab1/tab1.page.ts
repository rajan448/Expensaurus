import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  /**
   *
   */

  public name:string = ""
  public date:string
  constructor() {
  }
  ngOnInit(){
  }

  public getName():void {
    alert(this.date);
  }
}
