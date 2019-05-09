import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt1SlidebarComponent } from './bt1-slidebar.component';

describe('Bt1SlidebarComponent', () => {
  let component: Bt1SlidebarComponent;
  let fixture: ComponentFixture<Bt1SlidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt1SlidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt1SlidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
