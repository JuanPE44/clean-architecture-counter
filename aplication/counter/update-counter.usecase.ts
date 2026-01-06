import { CounterStore } from "../../infraestructure/counter/counter.store";

export class IncrementCounter {
  constructor(private store: CounterStore) {}

  execute() {
    this.store.increment();
  }
}
