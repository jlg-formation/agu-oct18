import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {


  constructor() {
    console.log('table service');
  }

  init(): any {
    return Observable.create((observer: Observer<any>) => {
      observer.next([
        { id: 1, login: 'Renier'},
        { id: 2, login: 'Rabaglia'},
      ]);
      observer.complete();
    });
  }
}
