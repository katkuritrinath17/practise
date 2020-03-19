import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NorderComponent } from './norder/norder.component';
import { NestedOrderRoutingModule } from 'src/app/nestedorder/nestedorderr-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [NorderComponent],
  imports: [
    CommonModule,NestedOrderRoutingModule,ReactiveFormsModule
  ]
})
export class NestedorderModule { }
