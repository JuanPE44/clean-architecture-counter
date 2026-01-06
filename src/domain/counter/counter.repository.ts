import { Counter } from "./counter.entity";

export interface CounterRepository {
  get(): Counter;
  update(value: number): Counter;
}
