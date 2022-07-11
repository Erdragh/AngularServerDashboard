import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit, OnDestroy {

  steps: number[] = [];
  @Input() stepCount: number = 10;

  @Input() update: Subject<number>;
  subscription: Subscription;

  @Input() read: (step: number) => {};

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.stepCount; i++) {
      this.addStep(Math.random() * 100);
    }
    if (this.update) {
      this.subscription = this.update.subscribe((step: number) => {
        this.newStep(step);
      })
    }
  }

  addStep(step: number) {
    this.steps.push(step);
  }

  newStep(step: number) {
    for (let i = 0; i < this.steps.length-1; i++) {
      this.steps[i] = this.steps[i+1];
    }
    this.steps[this.steps.length-1] = step;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getReadable(step: number) {
    return this.read(step);
  }

}
