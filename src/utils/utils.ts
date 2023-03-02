const formatTimeComponent = (timeComponent: number) => (timeComponent < 10) ? "0" + timeComponent : timeComponent;

export const formatTime = (duration: number) => {
  const secs = Math.floor((duration / 1000) % 60);
  const mins = Math.floor((duration / (1000 * 60)) % 60);
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  return `${formatTimeComponent(hours)}:${formatTimeComponent(mins)}:${formatTimeComponent(secs)}`
};
