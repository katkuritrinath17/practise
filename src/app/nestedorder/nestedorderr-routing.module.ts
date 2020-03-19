import {NgModule}  from '@angular/core';
import {Route,RouterModule} from '@angular/router';
import { NorderComponent } from 'src/app/nestedorder/norder/norder.component';

const route :Route[] =[{path:'',component:NorderComponent}]


@NgModule({
imports:[RouterModule.forChild(route)],
exports:[RouterModule]
})

export class NestedOrderRoutingModule{

}