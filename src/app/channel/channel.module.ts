import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelComponent } from './channel.component';
import { ChannelRoutingModule } from './channel-routing.module';

@NgModule({
  declarations: [ChannelComponent],
  imports: [
    CommonModule,
    ChannelRoutingModule
  ]
})
export class ChannelModule { }
