import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapNgforNgclassComponent } from './baitap-ngfor-ngclass.component';

describe('BaitapNgforNgclassComponent', () => {
  let component: BaitapNgforNgclassComponent;
  let fixture: ComponentFixture<BaitapNgforNgclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapNgforNgclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapNgforNgclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
