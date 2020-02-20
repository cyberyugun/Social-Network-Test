import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
        path : 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path : 'video',
        loadChildren: './video/video.module#VideoModule'
    },
    {
        path : 'channel',
        loadChildren: './channel/channel.module#ChannelModule'
    },{
        path : 'search/:id',
        loadChildren: './search/search.module#SearchModule'
    },
    {
        path: '**',
        redirectTo: 'home'
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
