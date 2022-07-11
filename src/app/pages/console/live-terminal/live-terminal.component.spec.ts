import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveTerminalComponent } from './live-terminal.component';

describe('LiveTerminalComponent', () => {
  let component: LiveTerminalComponent;
  let fixture: ComponentFixture<LiveTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveTerminalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
