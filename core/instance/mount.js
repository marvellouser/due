import VNode from "../vdom/vnode.js";
import { prepareRender, conText } from "./render.js";
export function initMount(Due) {
  Due.prototype.$mount = function (el) {
    let vm = this;
    let rootDom = document.getElementById(el);
    mount(vm, rootDom);
  };
}
export function mount(vm, elm) {
  vm._vnode = constructVNode(vm, elm, null);
  prepareRender(vm, vm._vnode);
  conText();
}

function constructVNode(vm, elm, parent) {
  let vnode = null;
  let children = [];
  let text = getNodeText(elm);
  let data = null;
  let nodeType = elm.nodeType;
  let tag = elm.nodeName;
  vnode = new VNode(tag, elm, children, text, data, parent, nodeType);
  let childs = vnode.elm.childNodes;
  for (let i = 0; i < childs.length; i++) {
    let childNotes = constructVNode(vm, childs[i], vnode);
    if (childNotes instanceof VNode) {
      vnode.children.push(childNotes);
    } else {
      vnode.children = vnode.children.concat(childNotes);
    }
  }
  return vnode;
}

function getNodeText(elm) {
  if (elm.nodeType == 3) {
    return elm.nodeValue;
  }
  return "";
}
