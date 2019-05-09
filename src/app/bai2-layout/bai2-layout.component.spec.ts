import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai2LayoutComponent } from './bai2-layout.component';

describe('Bai2LayoutComponent', () => {
  let component: Bai2LayoutComponent;
  let fixture: ComponentFixture<Bai2LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bai2LayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai2LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
