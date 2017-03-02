import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class InspectedWindowService {

  getResources() {
    return Observable.bindCallback(window['chrome'].devtools.inspectedWindow.getResources)();
  }

}
