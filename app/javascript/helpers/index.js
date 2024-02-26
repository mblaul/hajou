export function deleteAllChildrenNodes(element) {
  if (!element.firstChild) return;
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
}
