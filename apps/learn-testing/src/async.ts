export async function delay(message: string, time: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (time < 0) {
      reject("Time cannot be negative");
    }

    setTimeout(() => {
      resolve(message);
    }, time);
  });
}
