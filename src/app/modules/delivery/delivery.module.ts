import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryFormComponent } from './pages/delivery-form/delivery-form.component';
import { DeliveryDetailComponent } from './pages/delivery-detail/delivery-detail.component';
import { DeliveryListComponent } from './pages/delivery-list/delivery-list.component';

@NgModule({
  declarations: [
    DeliveryFormComponent,
    DeliveryDetailComponent,
    DeliveryListComponent,
  ],
  imports: [CommonModule],
})
export class DeliveryModule {}
