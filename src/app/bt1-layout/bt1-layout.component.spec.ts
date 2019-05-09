import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt1LayoutComponent } from './bt1-layout.component';

describe('Bt1LayoutComponent', () => {
  let component: Bt1LayoutComponent;
  let fixture: ComponentFixture<Bt1LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt1LayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt1LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
