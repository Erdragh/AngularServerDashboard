import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-hardware-info',
  templateUrl: './hardware-info.component.html',
  styleUrls: ['./hardware-info.component.scss']
})
export class HardwareInfoComponent implements OnInit {

  cpuSubject: Subject<number> = new Subject<number>();

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.cpuSubject.next(Math.random()*100);
    }, 1000);
  }

  readCPUGraphStep(step: number): string {
    return (Math.floor(step * 100) / 100) + "%"
  }

}
