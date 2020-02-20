import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module'
import { TimeAgoPipe } from 'time-ago-pipe'



@NgModule({
  declarations: [HomeComponent, TimeAgoPipe],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
