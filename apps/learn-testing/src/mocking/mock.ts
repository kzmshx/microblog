export class Calculator {
  public fib(n: number, memo: { [key: number]: number } = {}): number {
    if (n <= 0) {
      throw new Error("n cannot be negative");
    }
    if (n <= 2) {
      return 1;
    }
    if (memo[n]) {
      return memo[n];
    }
    return (memo[n] = this.fib(n - 1, memo) + this.fib(n - 2, memo));
  }
}
