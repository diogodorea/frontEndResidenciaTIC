import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NOTICIASComponent } from './noticias.component';

describe('NOTICIASComponent', () => {
  let component: NOTICIASComponent;
  let fixture: ComponentFixture<NOTICIASComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NOTICIASComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NOTICIASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
