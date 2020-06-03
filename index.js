import Due from "./core/index.js";

window.vm = new Due({
  el: "test",
  data: {
    content: "aaa",
    des: "bbbb",
    obj: {
      x: 1,
      y: 2,
    },
    arr: [
      {
        name: "aaa",
        age: 10,
      },
    ],
  },
});
