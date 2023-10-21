import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'delivery', pathMatch: 'full' },
  {
    path: 'delivery',
    loadChildren: () =>
      import('./modules/delivery/delivery.module').then(m => m.DeliveryModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
