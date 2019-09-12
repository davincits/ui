{
  const nav = document.querySelector('nav');
  if (nav) {
    document.querySelectorAll('h2, h3').forEach((el, index) => {
      const a = document.createElement('a');
      const name = el.nodeName;
      const text = el.textContent;
      const id = text.replace(/ /g, '-').replace(/[^\w-]+/g,'') + '-' + index;
      a.classList.add(`tag-${name}`);
      a.textContent = text;
      a.href = `#${id}`;
      el.id = id;
      nav.appendChild(a);
    });
  }
}