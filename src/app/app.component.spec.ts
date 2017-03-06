import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { RouteChangeService } from './services/route-change.service';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AnalysisComponent
      ],
      providers: [RouteChangeService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have analysis component', async(() => {
    const analysisfixture = TestBed.createComponent(AnalysisComponent);
    const analysisComponent = analysisfixture.debugElement.componentInstance;
    expect(analysisComponent).toBeTruthy;
  }));
});
