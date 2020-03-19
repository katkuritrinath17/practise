import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DeliveryformComponent } from 'src/app/order/deliveryform/deliveryform.component';


const routes: Route[] = [{path: '', component: DeliveryformComponent }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {



}


