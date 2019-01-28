import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { CurrencyConverterService } from '../services/currency-converter.service';
import { HttpClientModule} from '@angular/common/http'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage],
  providers:[CurrencyConverterService]
})
export class TabsPageModule {}
