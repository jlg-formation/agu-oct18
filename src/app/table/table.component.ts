import { Component, OnInit, Input, HostListener } from '@angular/core';
import { config } from 'rxjs';
import { TableService } from '../table.service';

export interface AppTableConfig {
  hateoas: string;
  src: string;
  fields: any[];
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [TableService],
})
export class TableComponent implements OnInit {

  @Input() cfg: AppTableConfig;

  records: any[];

  @HostListener('window:scroll', ['$event']) onScroll(event) {
    console.log('scroll', event);
    event.preventDefault();

  }

  constructor(private tableService: TableService) { }

  ngOnInit() {
    this.tableService.init().subscribe(records => this.records = records);
  }

}
