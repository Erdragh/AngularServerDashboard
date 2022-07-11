import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareInfoComponent } from './hardware-info.component';

describe('HardwareInfoComponent', () => {
  let component: HardwareInfoComponent;
  let fixture: ComponentFixture<HardwareInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardwareInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardwareInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
