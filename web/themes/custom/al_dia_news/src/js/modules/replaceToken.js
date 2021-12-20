/**
 * Reemplazar palabra clave o token por algún valor dado
 *
 * @param {String} regexToken Palabra o token como bandera para buscar y reemplazar
 * @param {String} value Texto o html para reemplazar el token
 * @param {Element} elements Colección de elementos HTML especificos en los que debera buscar el token
 */
const replaceToken = (regexToken, value, elements = []) => {
  const search = new RegExp(`${regexToken}`, 'gim');

  if (elements.length) {
    Array.from(elements).forEach(element => {
      if (element instanceof Element) {
        element.innerHTML = element.innerHTML.replace(search, value);
      }
    });
  }
}

export default replaceToken;
