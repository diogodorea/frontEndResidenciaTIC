import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ARARAComponent } from './arara.component';

describe('ARARAComponent', () => {
  let component: ARARAComponent;
  let fixture: ComponentFixture<ARARAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ARARAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ARARAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
