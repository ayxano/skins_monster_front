export function setActive(i, accRowBody) {
  const el = accRowBody[i];
  const prevEl = accRowBody[this.activeItemIndex];
  if (prevEl) {
    toggleStyles(prevEl, false);
  }

  if (el) {
    toggleStyles(el, !isActive(i, this.activeItemIndex));
    if (isActive(i, this.activeItemIndex)) {
      this.activeItemIndex = null;
    } else {
      this.activeItemIndex = i;
    }
  }
}

function toggleStyles(el, show) {
  if (show) {
    el.style.maxHeight = el.scrollHeight + "px";
    el.style.opacity = "1";
  } else {
    el.style.maxHeight = "0";
    el.style.opacity = "0";
  }
}

export function isActive(index, activeIndex) {
  return index === activeIndex;
}
