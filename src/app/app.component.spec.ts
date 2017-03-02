import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {AnalysisComponent} from './analysis/analysis.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AnalysisComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have analysis component', async(()=>{
    const analysisfixture = TestBed.createComponent(AnalysisComponent);
    const analysisComponent = analysisfixture.debugElement.componentInstance;
    expect(analysisComponent).toBeTruthy;
  }));
});
