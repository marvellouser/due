export default class VNode {
  constructor(tag, elm, children, text, data, parent, nodeType) {
    // tag 标签类型
    // elm 对应的真实节点
    // children 当前节点的子节点
    // text 当前虚拟节点的文本
    // data VNodeData
    // parent 父级节点
    // nodeType 节点类型
    this.tag = tag;
    this.elm = elm;
    this.children = children;
    this.text = text;
    this.data = data;
    this.parent = parent;
    this.nodeType = nodeType;
    this.env = {}; //环境变量
    this.instructions = null; // 存放指令
    this.template = []; // 当前节点设计模板
  }
}
