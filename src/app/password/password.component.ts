import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  _pwd: string;

  @Input() set pwd(value) {
    this._pwd = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
