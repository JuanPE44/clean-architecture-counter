type Listener = () => void;

export class CounterStore {
  private value = 0;
  private listeners = new Set<Listener>();

  getValue() {
    return this.value;
  }

  increment() {
    this.value += 1;
    this.notify();
  }

  subscribe(listener: Listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notify() {
    this.listeners.forEach((l) => l());
  }
}
