
let dom = {
  // 将查找元素节点的方法封装起来
  find: function (selector, context) {
    // selector 参数必须为字符类型
    if(!selector || typeof selector !== 'string') return;

    context = context || document;

    if(typeof context !== 'object') return;

    // 获取到的元素节点
    let nodes = context.querySelectorAll(selector);

    // 兼容处理 querySelector 和 querySelectorAll
    return nodes.length === 1 ? nodes[0] : nodes;
  },

  each: function (nodes, callback) {
    if(!nodes.length) return;
    for(let i = 0; i < nodes.length; i++) {
      callback(nodes[i], i);
    }
  },

  css: function (nodes, attribute, value) {
    // 后续可以优化为 Array.from(nodes)
    if(!nodes.length) nodes = [nodes];

    this.each(nodes, function (node) {
      node.style[attribute] = value;
    })
  },

  text: function (nodes, value) {
    // 后续可以优化为 Array.from(nodes)
    if(!nodes.length) nodes = [nodes];

    this.each(nodes, function (node) {
      node.innerText = value;
    })
  },

  html: function (nodes) {
    // 后续可以优化为 Array.from(nodes)
    if(!nodes.length) nodes = [nodes];

    this.each(nodes, function (node) {
      node.innerText = value;
    })
  },

  parents: function (node, endClass) {
    let parent = node.parentNode;
    let end = parent.classList.contains(endClass);

    if(!parent || end) return parent;

    return this.parents(parent, endClass);
  },

  parent: function (node) {
    return node.parentNode;
  },

  next: function (node) {
    return node.nextElementSibling;
  },

  prev: function (node) {
    return node.previousElementSibling;
  },

  first: function (nodes) {
    return nodes[0];
  },

  last: function (nodes) {
    return nodes[nodes.length - 1];
  },

  clone: function (node) {
    return node.cloneNode(true);
  },

  remove: function (node) {
    node.parentNode.removeChild(node);
  },

  prepend: function (parent, node) {
    parent.insertBefore(node, parent.firstChild);
  },

  append: function (parent, node) {
    parent.appendChild(node);
  },

  on: function (nodes, type, callback) {
    // 后续可以优化为 Array.from(nodes)
    if(!nodes.length) nodes = [nodes];

    this.each(nodes, function (node, key) {
      node.addEventListener(type, function (ev) {
        callback(ev, node, key)
      })
    })
  },

  delegate: function (parents, childClass, type, callback) {
    this.on(parents, type, function (ev, node, key) {
      if(ev.target.classList.contains(childClass)) {
        callback(ev, ev.target)
      }
    })
  }
}

