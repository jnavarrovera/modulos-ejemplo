export function inputNumber(message: string, errorMsg?: string) {
  return new Promise<number>((resolve) => {
    let aStr = prompt(message);

    while (!aStr || isNaN(+aStr)) {
      aStr = prompt(errorMsg ?? message);
    }

    const a = +aStr;

    resolve(a);
  });
}
