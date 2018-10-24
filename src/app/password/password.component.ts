import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  private _pwd: string;
  state = 'hidden';

  setState(state) {
    this.state = state;
  }

  @Input() get pwd() {
    return this._pwd;
  }

  @Output() pwdChange = new EventEmitter();
  set pwd(val) {
    this._pwd = val;
    this.pwdChange.emit(this._pwd);
  }


  constructor() { }

  ngOnInit() {
  }

}
