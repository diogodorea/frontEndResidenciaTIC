import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACESSOComponent } from './acesso.component';

describe('ACESSOComponent', () => {
  let component: ACESSOComponent;
  let fixture: ComponentFixture<ACESSOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ACESSOComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ACESSOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
