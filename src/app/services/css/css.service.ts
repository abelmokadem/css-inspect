import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Resource } from "./resource.model";
import { InspectedWindowService } from "../inspected-window/inspected-window.service";

@Injectable()
export class CssService {

  private resources$: BehaviorSubject<Resource[]> = new BehaviorSubject<Resource[]>([]);

  public resources: Observable<Resource[]> = new Observable<Resource[]>();

  constructor(private inspectedWindowService: InspectedWindowService) {

  }

  initialize() {
    this.inspectedWindowService.getResources().subscribe((resources) => {
      console.log(resources);
    });
  }

}
