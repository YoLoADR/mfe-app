import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  itemCount: number = 1;

  increment() {
    this.itemCount++;
  }

  decrement() {
    if (this.itemCount > 1) {
      this.itemCount--;
    }
  }

}
