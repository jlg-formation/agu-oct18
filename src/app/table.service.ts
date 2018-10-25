import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  start = 0;
  end = 15;
  increment = 10;

  table: any[];

  constructor() {
    console.log('table service');
    this.table = new Array(1000)
      .fill(0)
      .map((n, i) => ({ id: i, login: `login du id ${i}` }));
  }

  init(): any {
    return Observable.create((observer: Observer<any>) => {
      observer.next(this.table.filter((n, i) => i < this.end));
      observer.complete();
    });
  }

  getMore(): any {
    return Observable.create((observer: Observer<any>) => {
      this.start = this.end;
      this.end += this.increment;
      const records = this.table
        .filter((n, i) => i >= this.start && i < this.end);

      console.log('getMore', records);
      observer.next(records);
      observer.complete();
    });
  }
}
