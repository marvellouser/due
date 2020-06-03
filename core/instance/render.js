let template2Vnode = new Map();
let vnode2Template = new Map();

export function prepareRender(vm, vnode) {
  if (vnode == null) return;
  if (vnode.nodeType == 3) {
    // 文本节点;
    analysisTemplateString(vnode);
  } else if (vnode.nodeType == 1) {
    //标签节点
    for (let i = 0; i < vnode.children.length; i++) {
      prepareRender(vm, vnode.children[i]);
    }
  }
}

function analysisTemplateString(vnode) {
  const templateStrList = vnode.text.match(/{{[a-zA-Z0-9_.]+}}/g) || [];
  for (let i = 0; i < templateStrList.length; i++) {
    setTemplate2Vnode(templateStrList[i], vnode);
    setVnode2Template(templateStrList[i], vnode);
  }
}

function setTemplate2Vnode(template, vnode) {
  const templateSet = template2Vnode.get(getTempName(template));
  if (templateSet) {
    templateSet.push(vnode);
  } else {
    console.log(11111, template, [vnode]);

    template2Vnode.set(getTempName(template), [vnode]);
  }
}

function setVnode2Template(template, vnode) {
  const vnodeSet = vnode2Template.get(vnode);
  if (vnodeSet) {
    vnodeSet.push(getTempName(template));
  } else {
    vnode2Template.set(vnode, [getTempName(template)]);
  }
}

function getTempName(text) {
  return text.substring(2, text.length - 2);
}

export function conText() {
  console.log(template2Vnode, vnode2Template, "........");
}
