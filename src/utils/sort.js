import { FILTERS_NAMES } from "../constants/messages.js";

export const sort = (arr = [], selector = FILTERS_NAMES.CHEAP) => {
  const sortedArr = arr.sort((a, b) => {
    const args =
      selector === FILTERS_NAMES.CHEAP
        ? {
            first: a.price,
            second: b.price,
          }
        : selector === FILTERS_NAMES.FAST
        ? {
            first: a.segments[0].duration,
            second: b.segments[0].duration,
          }
        : {
            first: a.segments[0].stops.length,
            second: b.segments[0].stops.length,
          };

    return args.first - args.second;
  });
  return [...sortedArr];
};
