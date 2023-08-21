export const convertMinsToHHMM = (minutes: number) => {
  const hours = Math.floor(minutes / 60);

  const leftoverMinutes = minutes % 60;
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(leftoverMinutes).padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}`;
};
