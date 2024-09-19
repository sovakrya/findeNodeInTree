function findNodeInTree(tree, value) {
  if (tree.node === value) {
    return tree;
  }

  let res = -1;

  for (let child of tree.children) {
    res = findNodeInTree(child, value);

    if (res !== -1) {
      return res;
    }
  }

  return res;
}
