function scrollDivX(id, offset) {
    const div = document.getElementById(id);
    let scrollLeft = div.scrollLeft;
    div.scroll({left: scrollLeft + offset, behavior: 'smooth'});
}

export { scrollDivX };