import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from 'src/app/parent/parent.component';
import { ChildComponent } from 'src/app/child/child.component';
import { ObserComponent } from 'src/app/obser/obser.component';
import { RequiementsComponent } from 'src/app/requiements/requiements.component';


const routes: Routes = [
{path:'order', loadChildren: './order/order.module#OrderModule'},
{ path: '', redirectTo: '/req', pathMatch: 'full' },
{path:'rorder',loadChildren:'./nestedorder/nestedorder.module#NestedorderModule'},
{path:'parent',component:ParentComponent},
{path:'child',component : ChildComponent},
{path:'observable',component:ObserComponent},
{path:'req',component:RequiementsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
