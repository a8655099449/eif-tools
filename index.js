
export function download(link, name) {
  if (!name) {
    name = link.slice(link.lastIndexOf('/') + 1);
  }
  let eleLink = document.createElement('a');
  eleLink.download = name;
  eleLink.style.display = 'none';
  eleLink.href = link;
  document.body.appendChild(eleLink);
  eleLink.click();
  document.body.removeChild(eleLink);
}
