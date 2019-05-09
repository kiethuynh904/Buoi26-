import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt2ItemComponent } from './bt2-item.component';

describe('Bt2ItemComponent', () => {
  let component: Bt2ItemComponent;
  let fixture: ComponentFixture<Bt2ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt2ItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt2ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
