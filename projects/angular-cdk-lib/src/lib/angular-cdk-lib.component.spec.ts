import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCdkLibComponent } from './angular-cdk-lib.component';

describe('AngularCdkLibComponent', () => {
  let component: AngularCdkLibComponent;
  let fixture: ComponentFixture<AngularCdkLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularCdkLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularCdkLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
