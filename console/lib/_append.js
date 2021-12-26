import { STYLE_TEMPLATE, TEXT_TEMPLATE } from "./_template.js";

export const containerAppend = () => {
    const CONTAINER = document.createElement('div');
    CONTAINER.className = 'container';
    document.body.appendChild(CONTAINER);
    return Promise.resolve(CONTAINER)
}

export const textAppend = (CONTAINER) => {
    const TEXT = document.createElement('h1');
    TEXT.className = 'text';
    TEXT.textContent = TEXT_TEMPLATE;
    CONTAINER.appendChild(TEXT);
    return Promise.resolve('DONE')
}



export const styleAppend = () => {
    const STYLE = document.createElement('style');
    STYLE.textContent = STYLE_TEMPLATE;
    document.head.appendChild(STYLE);
    return Promise.resolve('DONE')
}


export const loader = (CONTAINER) => {
    const LOADER = document.createElement('div');
    LOADER.className = 'loader';
    CONTAINER.appendChild(LOADER);
    return Promise.resolve(CONTAINER)
}

