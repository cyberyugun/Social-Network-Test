import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../service/rest-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private rest:RestApiService) { }
  dataitemHeadlineus:any=[]
  id;
  length;
  ngOnInit() {
    this.activatedRoute.params.subscribe(async res => {
            this.id = res['id'];
            await this.rest.searchData(this.id).subscribe(data => {
            this.dataitemHeadlineus = data["articles"];
            this.length = this.dataitemHeadlineus.length;
    });
        });
    
  }

}
