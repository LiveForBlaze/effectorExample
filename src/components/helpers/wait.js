export function wait(ms, value) {
  return new Promise(resolve => setTimeout(resolve, ms, value));
}