import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }

  getHeaders() {
    const token = localStorage.getItem('token-uApps');
    return token ? new HttpHeaders().set('Authorization', token) : null;
  }

  get(link: string) {
    return this.http.get(link, { headers: this.getHeaders() }).toPromise();
  }

  post(link: string, body: any) {
    return this.http.post(link, body, { headers: this.getHeaders() }).toPromise();
  }

  link_url() {
    return 'https://newsapi.org/v2';
  }

  getTopHeadlineus() {
    return this.http.get(`${this.link_url()}/top-headlines?country=us&apiKey=ae8d986edd3044eea803983fb7314abc`, { headers: this.getHeaders() });
  }

  getSource() {
    return this.http.get(`${this.link_url()}/sources?apiKey=ae8d986edd3044eea803983fb7314abc`, { headers: this.getHeaders() });
  }

  searchData(data){
    return this.http.get(`${this.link_url()}/everything?q='${data}'&apiKey=ae8d986edd3044eea803983fb7314abc`, { headers: this.getHeaders() });
  }
}
