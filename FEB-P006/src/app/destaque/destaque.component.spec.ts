import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DESTAQUEComponent } from './destaque.component';

describe('DESTAQUEComponent', () => {
  let component: DESTAQUEComponent;
  let fixture: ComponentFixture<DESTAQUEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DESTAQUEComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DESTAQUEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
