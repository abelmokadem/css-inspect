import { Component } from '@angular/core';
import {CssService} from "./services/css/css.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  constructor(private cssService: CssService) {
    console.log(cssService);
  }
}
