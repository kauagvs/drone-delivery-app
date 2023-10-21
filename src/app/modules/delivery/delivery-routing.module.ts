import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryFormComponent } from './pages/delivery-form/delivery-form.component';
import { DeliveryListComponent } from './pages/delivery-list/delivery-list.component';
import { DeliveryDetailComponent } from './pages/delivery-detail/delivery-detail.component';

const routes: Routes = [
  { path: 'delivery-form', component: DeliveryFormComponent },
  { path: 'delivery-list', component: DeliveryListComponent },
  { path: 'delivery-detail/:id', component: DeliveryDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryRoutingModule {}
