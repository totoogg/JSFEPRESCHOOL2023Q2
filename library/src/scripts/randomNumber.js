export function randomNumberCard() {
  return (Math.random() * 1e16).toString(16).slice(0, 9)
}