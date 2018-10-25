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
  isBusy = false;

  @HostListener('window:scroll', ['$event']) onScroll(event) {



    event.preventDefault();
    if (bottomReached()) {
      console.log('scroll bottom reached', event);
      if (this.isBusy) {
        return;
      }
      this.isBusy = true;
      this.tableService.getMore()
        .subscribe(records => {
          this.records.push(...records);
          this.isBusy = false;
        });
    }

    function bottomReached() {
      return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
    }


  }

  constructor(private tableService: TableService) { }

  ngOnInit() {
    this.tableService.setCfg(this.cfg)
    this.tableService.init().subscribe(records => this.records = records);
  }

}
