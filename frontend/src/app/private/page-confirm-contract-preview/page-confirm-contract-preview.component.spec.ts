import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConfirmContractPreviewComponent } from './page-confirm-contract-preview.component';

describe('PageConfirmContractPreviewComponent', () => {
  let component: PageConfirmContractPreviewComponent;
  let fixture: ComponentFixture<PageConfirmContractPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageConfirmContractPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageConfirmContractPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
