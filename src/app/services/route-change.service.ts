import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/startWith';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class RouteChangeService {

  public resourceName: BehaviorSubject<string> = new BehaviorSubject<string>("");

  setResourceName(resource: string) { 
    this.resourceName.next(resource);
  }

}

