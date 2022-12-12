import { format, addMinutes } from "date-fns";

export const formatTime = (item) => {
  return `${format(new Date(item.date), "k:mm")} - ${format(
    addMinutes(new Date(item.date), item.duration),
    "k:mm"
  )}`;
};

export const formatDuration = (duration) => {
  return `${Math.floor(duration / 60)}г ${
    duration - Math.floor(duration / 60) * 60
  }хв`;
};

export const formatStops = (stopsNumber) => {
  return `${stopsNumber ? stopsNumber : "НЕМАЄ"} ${
    stopsNumber === 1
      ? "ЗУПИНКА"
      : (stopsNumber === 2) | (stopsNumber === 3) | (stopsNumber === 4)
      ? "ЗУПИНКИ"
      : "ЗУПИНОК"
  }`;
};
