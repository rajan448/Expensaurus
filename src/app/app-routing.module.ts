import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
const config = {
  apiKey: 'AIzaSyASobNKpyovjt_r-uyIYKJ5jekHzfTxoEg',
  authDomain: 'expensaurus-81043.firebaseapp.com',
  databaseURL: 'https://expensaurus-81043.firebaseio.com',
  projectId: 'expensaurus-81043',
  storageBucket: 'expensaurus-81043.appspot.com',
  messagingSenderId: '708880871694'
};
const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
