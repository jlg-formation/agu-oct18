import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nir',
  templateUrl: './nir.component.html',
  styleUrls: ['./nir.component.css']
})
export class NirComponent implements OnInit {

  @Input()
  nir = 'toto';

  constructor() { }

  ngOnInit() {
  }

}
