import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SecondchildComponent } from './secondchild/secondchild.component';
import { ObserComponent } from './obser/obser.component';
import { RequiementsComponent } from './requiements/requiements.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    SecondchildComponent,
    ObserComponent,
    RequiementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
