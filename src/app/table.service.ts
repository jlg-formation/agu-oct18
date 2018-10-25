import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppTableConfig } from './table/table.component';

@Injectable({
  providedIn: 'root',
})
export class TableService {


  link: string;

  table: any[];
  cfg: AppTableConfig;

  constructor(private http: HttpClient) {
    console.log('table service');
    this.table = new Array(1000)
      .fill(0)
      .map((n, i) => ({ id: i, login: `login du id ${i}` }));
  }

  setCfg(cfg: AppTableConfig) {
    this.cfg = cfg;
  }

  init(): any {
    return Observable.create((observer: Observer<any>) => {
      this.http.get(this.cfg.src, { observe: 'response' }).subscribe(
        response => {
          observer.next(response.body);
          observer.complete();
          this.link = response.headers.get('Link')
            .replace(/^.*<(.*?)>.*<.*$/, '$1');
          console.log('Link', this.link);
        }
      );

    });
  }

  getMore(): any {
    return Observable.create((observer: Observer<any>) => {
      this.http.get(this.link, { observe: 'response' }).subscribe(
        response => {
          observer.next(response.body);
          observer.complete();
          this.link = response.headers.get('Link')
            .replace(/^.*<(.*?)>.*<.*$/, '$1');
          console.log('Link', this.link);
        }
      );
    });
  }
}
