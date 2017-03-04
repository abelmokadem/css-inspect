import { Component } from '@angular/core';
import { RouteChangeService } from './services/route-change.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public resourceGroup: Array<string>;

  constructor(private _routChangeService: RouteChangeService) {
    //todo: replace with service to fetch all the css files
    this.resourceGroup = ['index.css', 'another.css', 'contact.css', 'about.css'];
  }

  getResourceAnalysis(name: string): void {
    this._routChangeService.setResourceName(name);
  }
  ngOnInit() {
    //todo: set with the default one, depending on service
    this._routChangeService.setResourceName('index.css');
  }
}
