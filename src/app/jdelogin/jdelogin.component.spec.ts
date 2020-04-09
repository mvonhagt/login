import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JdeloginComponent } from './jdelogin.component';

describe('JdeloginComponent', () => {
  let component: JdeloginComponent;
  let fixture: ComponentFixture<JdeloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JdeloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JdeloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
