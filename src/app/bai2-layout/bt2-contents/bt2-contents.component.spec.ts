import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt2ContentsComponent } from './bt2-contents.component';

describe('Bt2ContentsComponent', () => {
  let component: Bt2ContentsComponent;
  let fixture: ComponentFixture<Bt2ContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt2ContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt2ContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
