import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMyContractsComponent } from './page-my-contracts.component';

describe('PageMyContractsComponent', () => {
  let component: PageMyContractsComponent;
  let fixture: ComponentFixture<PageMyContractsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMyContractsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMyContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
