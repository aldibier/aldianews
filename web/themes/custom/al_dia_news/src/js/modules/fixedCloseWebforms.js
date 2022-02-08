function formApplyModified(form, elementClass) {
    if (!!form) {
        const formWidth = getSizeForm(form);
        const btn = form.querySelector(elementClass);

        if (!!btn) addSizeProperty(btn, formWidth);
    }
}

function getSizeForm(form) {
    const formSize = form.offsetWidth;
    return formSize;
}

function addSizeProperty(element, formWidth) {
    element.style.setProperty("--form-size", `${formWidth}px`);
}

export { formApplyModified }