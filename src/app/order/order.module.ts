import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryformComponent } from './deliveryform/deliveryform.component';
import { OrderRoutingModule } from 'src/app/order/order-routing.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [DeliveryformComponent],
  imports: [
    CommonModule,OrderRoutingModule,FormsModule
  ]
})
export class OrderModule { }
