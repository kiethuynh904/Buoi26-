import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTapXeBusComponent } from './bai-tap-xe-bus.component';

describe('BaiTapXeBusComponent', () => {
  let component: BaiTapXeBusComponent;
  let fixture: ComponentFixture<BaiTapXeBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTapXeBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTapXeBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
