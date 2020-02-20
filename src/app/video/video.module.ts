import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video.component';
import { VideoRoutingModule } from './video-routing.module';

@NgModule({
  declarations: [VideoComponent],
  imports: [
    CommonModule,
    VideoRoutingModule
  ]
})
export class VideoModule { }
