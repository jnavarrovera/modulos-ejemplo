export default function log(...params: any[]): void {
  console.log(...params);
}

export function error(...params: any[]): void {
  console.error(...params);
}

export function warn(...params: any[]): void {
  console.warn(...params);
}

export function clear(): void {
  console.clear();
}
