import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Social';
  search = '';

  constructor(private router:Router){

  }

  searchData(data){
    this.router.navigate(['/search/'+data])
  }
}
