import { Component, OnInit } from '@angular/core';
import { RouteChangeService } from '../services/route-change.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {
  public resourceName: string;
  constructor(private _routeChangeService: RouteChangeService) {
    this._routeChangeService.resourceName.subscribe(resource => {
      this.resourceName = resource;
    })
  }

  ngOnInit() {

  }

}
