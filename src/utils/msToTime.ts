const msToTime = (ms: number) => {
  const sec = Math.floor(ms / 1000);
  const min = Math.floor(sec / 60);
  const remainingSec = sec % 60;
  const minStr = String(min);
  const secStr = String(remainingSec).padStart(2, '0');

  return `${minStr}:${secStr}`;
};

export default msToTime;
