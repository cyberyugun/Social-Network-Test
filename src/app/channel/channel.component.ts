import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../service/rest-api.service';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {
  dataitemHeadlineus: any = [];
  dataItemSource: any = [];

  constructor(private rest: RestApiService) { }

  ngOnInit() {
    this.dataHeadlinesca();
  }
  async dataHeadlinesca() {
    await this.rest.getSource().subscribe(data => {
      this.dataItemSource = data["sources"];
    });
  }
}
