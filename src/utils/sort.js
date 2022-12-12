export const sort = (arr = [], selector = "cheap") => {
  console.log(arr);
  const sortedArr = arr.sort((a, b) => {
    const args =
      selector === "cheap"
        ? {
            first: a.price,
            second: b.price,
          }
        : selector === "fast"
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
