import { Component, OnInit, Input } from '@angular/core';
import { config } from 'rxjs';

export interface AppTableConfig {
  hateoas: string;
  src: string;
  fields: any[];
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() cfg;

  headers = ['id', 'login'];
  constructor() { }

  ngOnInit() {
  }

}
