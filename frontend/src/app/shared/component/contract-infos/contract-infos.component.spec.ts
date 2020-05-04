import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractInfosComponent } from './contract-infos.component';

describe('ContractInfosComponent', () => {
  let component: ContractInfosComponent;
  let fixture: ComponentFixture<ContractInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
