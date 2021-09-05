import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueComponentComponent } from './blue-component.component';

describe('BlueComponentComponent', () => {
  let component: BlueComponentComponent;
  let fixture: ComponentFixture<BlueComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
