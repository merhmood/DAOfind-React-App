export const filterSizeLogic = (filter) => {
  console.log(window.innerWidth);
  if (window.innerWidth > 414) {
    console.log("inner width ran");
    if (filter.length <= 7) {
      return { height: "100vh" };
    } else {
      return { height: "100%" };
    }
  }
  if (window.innerWidth < 414) {
    console.log("inner width ran");
    return { height: "100%" };
  }
};
