import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {


  table: any[];

  constructor() {
    console.log('table service');
    this.table = new Array(50)
      .fill(0)
      .map((n, i) => ({id: i, login: `login du id ${i}`}));
  }

  init(): any {
    return Observable.create((observer: Observer<any>) => {
      observer.next(this.table.filter((n, i) => i < 10));
      observer.complete();
    });
  }

  getMore(): any {
    return Observable.create((observer: Observer<any>) => {
      const records = this.table.filter((n, i) => i >= 10 && i < 20);

      console.log('getMore', records);
      observer.next(records);
      observer.complete();
    });
  }
}
