"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/hast-util-parse-selector@4.0.0";
exports.ids = ["vendor-chunks/hast-util-parse-selector@4.0.0"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/hast-util-parse-selector@4.0.0/node_modules/hast-util-parse-selector/lib/index.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/hast-util-parse-selector@4.0.0/node_modules/hast-util-parse-selector/lib/index.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   parseSelector: () => (/* binding */ parseSelector)\n/* harmony export */ });\n/**\n * @typedef {import('hast').Element} Element\n * @typedef {import('hast').Properties} Properties\n */\n\n/**\n * @template {string} SimpleSelector\n *   Selector type.\n * @template {string} DefaultTagName\n *   Default tag name.\n * @typedef {(\n *   SimpleSelector extends ''\n *     ? DefaultTagName\n *     : SimpleSelector extends `${infer TagName}.${infer Rest}`\n *     ? ExtractTagName<TagName, DefaultTagName>\n *     : SimpleSelector extends `${infer TagName}#${infer Rest}`\n *     ? ExtractTagName<TagName, DefaultTagName>\n *     : SimpleSelector extends string\n *     ? SimpleSelector\n *     : DefaultTagName\n * )} ExtractTagName\n *   Extract tag name from a simple selector.\n */\n\nconst search = /[#.]/g\n\n/**\n * Create a hast element from a simple CSS selector.\n *\n * @template {string} Selector\n *   Type of selector.\n * @template {string} [DefaultTagName='div']\n *   Type of default tag name (default: `'div'`).\n * @param {Selector | null | undefined} [selector]\n *   Simple CSS selector (optional).\n *\n *   Can contain a tag name (`foo`), classes (`.bar`), and an ID (`#baz`).\n *   Multiple classes are allowed.\n *   Uses the last ID if multiple IDs are found.\n * @param {DefaultTagName | null | undefined} [defaultTagName='div']\n *   Tag name to use if `selector` does not specify one (default: `'div'`).\n * @returns {Element & {tagName: ExtractTagName<Selector, DefaultTagName>}}\n *   Built element.\n */\nfunction parseSelector(selector, defaultTagName) {\n  const value = selector || ''\n  /** @type {Properties} */\n  const props = {}\n  let start = 0\n  /** @type {string | undefined} */\n  let previous\n  /** @type {string | undefined} */\n  let tagName\n\n  while (start < value.length) {\n    search.lastIndex = start\n    const match = search.exec(value)\n    const subvalue = value.slice(start, match ? match.index : value.length)\n\n    if (subvalue) {\n      if (!previous) {\n        tagName = subvalue\n      } else if (previous === '#') {\n        props.id = subvalue\n      } else if (Array.isArray(props.className)) {\n        props.className.push(subvalue)\n      } else {\n        props.className = [subvalue]\n      }\n\n      start += subvalue.length\n    }\n\n    if (match) {\n      previous = match[0]\n      start++\n    }\n  }\n\n  return {\n    type: 'element',\n    // @ts-expect-error: tag name is parsed.\n    tagName: tagName || defaultTagName || 'div',\n    properties: props,\n    children: []\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vaGFzdC11dGlsLXBhcnNlLXNlbGVjdG9yQDQuMC4wL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtcGFyc2Utc2VsZWN0b3IvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBLGFBQWEsd0JBQXdCO0FBQ3JDLGFBQWEsMkJBQTJCO0FBQ3hDOztBQUVBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxtQ0FBbUMsY0FBYyxHQUFHLFdBQVc7QUFDL0Q7QUFDQSxtQ0FBbUMsY0FBYyxHQUFHLFdBQVc7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEI7QUFDQSxjQUFjLFFBQVE7QUFDdEI7QUFDQSxXQUFXLDZCQUE2QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQ0FBbUM7QUFDOUM7QUFDQSxhQUFhLFdBQVc7QUFDeEI7QUFDQTtBQUNPO0FBQ1A7QUFDQSxhQUFhLFlBQVk7QUFDekI7QUFDQTtBQUNBLGFBQWEsb0JBQW9CO0FBQ2pDO0FBQ0EsYUFBYSxvQkFBb0I7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYWFzLXRlbXBsYXRlLW1hZ2ljdWkvLi9ub2RlX21vZHVsZXMvLnBucG0vaGFzdC11dGlsLXBhcnNlLXNlbGVjdG9yQDQuMC4wL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtcGFyc2Utc2VsZWN0b3IvbGliL2luZGV4LmpzPzYwMzgiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuRWxlbWVudH0gRWxlbWVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLlByb3BlcnRpZXN9IFByb3BlcnRpZXNcbiAqL1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7c3RyaW5nfSBTaW1wbGVTZWxlY3RvclxuICogICBTZWxlY3RvciB0eXBlLlxuICogQHRlbXBsYXRlIHtzdHJpbmd9IERlZmF1bHRUYWdOYW1lXG4gKiAgIERlZmF1bHQgdGFnIG5hbWUuXG4gKiBAdHlwZWRlZiB7KFxuICogICBTaW1wbGVTZWxlY3RvciBleHRlbmRzICcnXG4gKiAgICAgPyBEZWZhdWx0VGFnTmFtZVxuICogICAgIDogU2ltcGxlU2VsZWN0b3IgZXh0ZW5kcyBgJHtpbmZlciBUYWdOYW1lfS4ke2luZmVyIFJlc3R9YFxuICogICAgID8gRXh0cmFjdFRhZ05hbWU8VGFnTmFtZSwgRGVmYXVsdFRhZ05hbWU+XG4gKiAgICAgOiBTaW1wbGVTZWxlY3RvciBleHRlbmRzIGAke2luZmVyIFRhZ05hbWV9IyR7aW5mZXIgUmVzdH1gXG4gKiAgICAgPyBFeHRyYWN0VGFnTmFtZTxUYWdOYW1lLCBEZWZhdWx0VGFnTmFtZT5cbiAqICAgICA6IFNpbXBsZVNlbGVjdG9yIGV4dGVuZHMgc3RyaW5nXG4gKiAgICAgPyBTaW1wbGVTZWxlY3RvclxuICogICAgIDogRGVmYXVsdFRhZ05hbWVcbiAqICl9IEV4dHJhY3RUYWdOYW1lXG4gKiAgIEV4dHJhY3QgdGFnIG5hbWUgZnJvbSBhIHNpbXBsZSBzZWxlY3Rvci5cbiAqL1xuXG5jb25zdCBzZWFyY2ggPSAvWyMuXS9nXG5cbi8qKlxuICogQ3JlYXRlIGEgaGFzdCBlbGVtZW50IGZyb20gYSBzaW1wbGUgQ1NTIHNlbGVjdG9yLlxuICpcbiAqIEB0ZW1wbGF0ZSB7c3RyaW5nfSBTZWxlY3RvclxuICogICBUeXBlIG9mIHNlbGVjdG9yLlxuICogQHRlbXBsYXRlIHtzdHJpbmd9IFtEZWZhdWx0VGFnTmFtZT0nZGl2J11cbiAqICAgVHlwZSBvZiBkZWZhdWx0IHRhZyBuYW1lIChkZWZhdWx0OiBgJ2RpdidgKS5cbiAqIEBwYXJhbSB7U2VsZWN0b3IgfCBudWxsIHwgdW5kZWZpbmVkfSBbc2VsZWN0b3JdXG4gKiAgIFNpbXBsZSBDU1Mgc2VsZWN0b3IgKG9wdGlvbmFsKS5cbiAqXG4gKiAgIENhbiBjb250YWluIGEgdGFnIG5hbWUgKGBmb29gKSwgY2xhc3NlcyAoYC5iYXJgKSwgYW5kIGFuIElEIChgI2JhemApLlxuICogICBNdWx0aXBsZSBjbGFzc2VzIGFyZSBhbGxvd2VkLlxuICogICBVc2VzIHRoZSBsYXN0IElEIGlmIG11bHRpcGxlIElEcyBhcmUgZm91bmQuXG4gKiBAcGFyYW0ge0RlZmF1bHRUYWdOYW1lIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2RlZmF1bHRUYWdOYW1lPSdkaXYnXVxuICogICBUYWcgbmFtZSB0byB1c2UgaWYgYHNlbGVjdG9yYCBkb2VzIG5vdCBzcGVjaWZ5IG9uZSAoZGVmYXVsdDogYCdkaXYnYCkuXG4gKiBAcmV0dXJucyB7RWxlbWVudCAmIHt0YWdOYW1lOiBFeHRyYWN0VGFnTmFtZTxTZWxlY3RvciwgRGVmYXVsdFRhZ05hbWU+fX1cbiAqICAgQnVpbHQgZWxlbWVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU2VsZWN0b3Ioc2VsZWN0b3IsIGRlZmF1bHRUYWdOYW1lKSB7XG4gIGNvbnN0IHZhbHVlID0gc2VsZWN0b3IgfHwgJydcbiAgLyoqIEB0eXBlIHtQcm9wZXJ0aWVzfSAqL1xuICBjb25zdCBwcm9wcyA9IHt9XG4gIGxldCBzdGFydCA9IDBcbiAgLyoqIEB0eXBlIHtzdHJpbmcgfCB1bmRlZmluZWR9ICovXG4gIGxldCBwcmV2aW91c1xuICAvKiogQHR5cGUge3N0cmluZyB8IHVuZGVmaW5lZH0gKi9cbiAgbGV0IHRhZ05hbWVcblxuICB3aGlsZSAoc3RhcnQgPCB2YWx1ZS5sZW5ndGgpIHtcbiAgICBzZWFyY2gubGFzdEluZGV4ID0gc3RhcnRcbiAgICBjb25zdCBtYXRjaCA9IHNlYXJjaC5leGVjKHZhbHVlKVxuICAgIGNvbnN0IHN1YnZhbHVlID0gdmFsdWUuc2xpY2Uoc3RhcnQsIG1hdGNoID8gbWF0Y2guaW5kZXggOiB2YWx1ZS5sZW5ndGgpXG5cbiAgICBpZiAoc3VidmFsdWUpIHtcbiAgICAgIGlmICghcHJldmlvdXMpIHtcbiAgICAgICAgdGFnTmFtZSA9IHN1YnZhbHVlXG4gICAgICB9IGVsc2UgaWYgKHByZXZpb3VzID09PSAnIycpIHtcbiAgICAgICAgcHJvcHMuaWQgPSBzdWJ2YWx1ZVxuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHByb3BzLmNsYXNzTmFtZSkpIHtcbiAgICAgICAgcHJvcHMuY2xhc3NOYW1lLnB1c2goc3VidmFsdWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wcy5jbGFzc05hbWUgPSBbc3VidmFsdWVdXG4gICAgICB9XG5cbiAgICAgIHN0YXJ0ICs9IHN1YnZhbHVlLmxlbmd0aFxuICAgIH1cblxuICAgIGlmIChtYXRjaCkge1xuICAgICAgcHJldmlvdXMgPSBtYXRjaFswXVxuICAgICAgc3RhcnQrK1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdHlwZTogJ2VsZW1lbnQnLFxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IHRhZyBuYW1lIGlzIHBhcnNlZC5cbiAgICB0YWdOYW1lOiB0YWdOYW1lIHx8IGRlZmF1bHRUYWdOYW1lIHx8ICdkaXYnLFxuICAgIHByb3BlcnRpZXM6IHByb3BzLFxuICAgIGNoaWxkcmVuOiBbXVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/hast-util-parse-selector@4.0.0/node_modules/hast-util-parse-selector/lib/index.js\n");

/***/ })

};
;