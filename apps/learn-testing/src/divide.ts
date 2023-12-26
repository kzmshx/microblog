export class ZeroDivisionError extends Error {
  constructor() {
    super("Cannot divide by zero");
  }
}

export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new ZeroDivisionError();
  }
  return a / b;
}
