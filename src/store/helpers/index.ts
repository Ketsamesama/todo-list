function setZiro(n: number): string {
  if (n < 10) {
    return `0${n}`;
  }
  return String(n);
}

export { setZiro };
