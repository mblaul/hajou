export function deleteAllChildrenNodes(element) {
  if (!element.firstChild) return;
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
