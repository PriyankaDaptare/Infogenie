import { NgModule, ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountDetailsComponent } from './accounts/account-details/account-details.component';
import {ContactDetailsComponent } from './contacts/contact-details/contact-details.component';

const routes: Routes = [{
  path: 'account-details',
  component: AccountDetailsComponent,
},
{
  path: 'contact-details',
  component: ContactDetailsComponent,
},
{ path: 'lazy', loadChildren: 'lazy/lazy.module#LazyModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
