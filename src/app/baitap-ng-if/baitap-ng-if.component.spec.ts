import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapNgIfComponent } from './baitap-ng-if.component';

describe('BaitapNgIfComponent', () => {
  let component: BaitapNgIfComponent;
  let fixture: ComponentFixture<BaitapNgIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapNgIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
