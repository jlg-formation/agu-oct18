import { Component } from '@angular/core';
import { AppTableConfig } from './table/table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exo';
  myPassword = 'toto';

  cfg: AppTableConfig = {
    hateoas: 'github',
    src: 'https://api.github.com/users',
    fields: ['id', 'login'],
  };
}
