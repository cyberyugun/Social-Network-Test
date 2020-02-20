import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../service/rest-api.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  dataitemHeadlineus: any = [];
  dataItemSource: any = [];

  constructor(private rest: RestApiService) { }

  ngOnInit() {
    this.dataHeadlinesus();
  }

  async dataHeadlinesus() {
    await this.rest.getTopHeadlineus().subscribe(data => {
      this.dataitemHeadlineus = data["articles"];
    });
  }
}
