import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../service/rest-api.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  dataitemHeadlineus: any = [];
  dataItemSource: any = [];

  constructor(private rest: RestApiService) {}

  ngOnInit() {
    this.dataHeadlinesus();
    this.dataHeadlinesca();
  }

  async dataHeadlinesus() {
    await this.rest.getTopHeadlineus().subscribe(data => {
      this.dataitemHeadlineus = data["articles"];
    });
  }

  async dataHeadlinesca() {
    await this.rest.getSource().subscribe(data => {
      this.dataItemSource = data["sources"];
    });
  }
}
