import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTapBinding1Component } from './bai-tap-binding1.component';

describe('BaiTapBinding1Component', () => {
  let component: BaiTapBinding1Component;
  let fixture: ComponentFixture<BaiTapBinding1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTapBinding1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTapBinding1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
