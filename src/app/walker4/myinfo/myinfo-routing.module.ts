import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyinfoPage } from './myinfo.page';

const routes: Routes = [
  {
    path: '',
    component: MyinfoPage
  },
  {
    path: 'opinions',
    loadChildren: () => import('./opinions/opinions.module').then( m => m.OpinionsPageModule)
  },
  {
    path: 'changepassword',
    loadChildren: () => import('./changepassword/changepassword.module').then( m => m.ChangepasswordPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyinfoPageRoutingModule {}
