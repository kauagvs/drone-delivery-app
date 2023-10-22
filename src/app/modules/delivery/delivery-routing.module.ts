import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryFormComponent } from './pages/delivery-form/delivery-form.component';
import { DeliveryListComponent } from './pages/delivery-list/delivery-list.component';

const routes: Routes = [
  { path: 'delivery-form', component: DeliveryFormComponent },
  { path: 'delivery-list', component: DeliveryListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryRoutingModule {}
