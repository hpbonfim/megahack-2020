import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModelsComponent } from './page-models.component';

describe('PageModelsComponent', () => {
  let component: PageModelsComponent;
  let fixture: ComponentFixture<PageModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageModelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
