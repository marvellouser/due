import { constructProxy } from "./proxy.js";
import { mount, initMount } from "./mount.js";
let uid = 0;
export function initMixin(Due) {
  Due.prototype._init = function (options) {
    initMount(Due);
    const vm = this;
    vm.uid = uid++;
    vm._isDue = true;
    if (options && options.data) {
      vm._data = constructProxy(vm, options.data);
    }
    if (options && options.el) {
      const rootDom = document.getElementById(options.el);
      mount(vm, rootDom);
    }
    // 初始化data
    // 初始化created
    // 初始化methods
    // 初始化computed
    // 初始化el并挂载
  };
}
