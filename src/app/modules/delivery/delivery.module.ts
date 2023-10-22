import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryFormComponent } from './pages/delivery-form/delivery-form.component';
import { DeliveryListComponent } from './pages/delivery-list/delivery-list.component';
import { DeliveryRoutingModule } from './delivery-routing.module';
import { FormsModule } from '@angular/forms';
import { DeliveryService } from 'src/app/core/services/delivery/delivery.service';
import { DeliveryHistoryService } from 'src/app/core/services/delivery-history/delivery-history.service';

@NgModule({
  declarations: [DeliveryFormComponent, DeliveryListComponent],
  imports: [CommonModule, DeliveryRoutingModule, FormsModule],
  providers: [DeliveryService, DeliveryHistoryService],
})
export class DeliveryModule {}
