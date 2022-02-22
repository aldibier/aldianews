function formApplyModified(element, elementClass) {
    if (!!element) {
        const elementWidth = getSizeForm(element);
        const btn = element.querySelector(elementClass);

        if (!!btn) addSizeProperty(btn, elementWidth);
    }
}

function getSizeForm(element) {
    const elementSize = element.offsetWidth;
    return elementSize;
}

function addSizeProperty(element, elementWidth) {
    element.style.setProperty("--form-size", `${elementWidth}px`);
}

export { formApplyModified }