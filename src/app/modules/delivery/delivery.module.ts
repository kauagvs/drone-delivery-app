import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryFormComponent } from './pages/delivery-form/delivery-form.component';
import { DeliveryDetailComponent } from './pages/delivery-detail/delivery-detail.component';
import { DeliveryListComponent } from './pages/delivery-list/delivery-list.component';
import { DeliveryRoutingModule } from './delivery-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DeliveryFormComponent,
    DeliveryDetailComponent,
    DeliveryListComponent,
  ],
  imports: [CommonModule, DeliveryRoutingModule, FormsModule],
})
export class DeliveryModule {}
