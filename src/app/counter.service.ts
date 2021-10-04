import { Injectable } from "@angular/core";


export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  incrememntActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log('Active to Inactive ' + this.activeToInactiveCounter);
  }

  incrememntInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log('Inactive to Active ' + this.inactiveToActiveCounter);
  }
}
