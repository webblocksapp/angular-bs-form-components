import { Injectable } from '@angular/core';

@Injectable()
export class ScriptManagerService {
  constructor() {}

  /**
   * Set the stylesheet with the specified key.
   */
  setScript(key: string, src: string) {
    getScriptElementForKey(key).setAttribute('src', src);
  }

  /**
   * Remove the stylesheet with the specified key.
   */
  removeScript(key: string) {
    const existingScriptElement = getExistingScriptElementByKey(key);
    if (existingScriptElement) {
      const footer = document.querySelectorAll(`footer`)[0];
      footer.removeChild(existingScriptElement);
    }
  }
}

function getScriptElementForKey(key: string) {
  return getExistingScriptElementByKey(key) || createScriptElementWithKey(key);
}

function getExistingScriptElementByKey(key: string) {
  return document.querySelector(`footer script.${getClassNameForKey(key)}`);
}

function createScriptElementWithKey(key: string) {
  const scriptEl = document.createElement('script');
  scriptEl.classList.add(getClassNameForKey(key));
  const footer = document.querySelectorAll(`footer`)[0];
  footer.appendChild(scriptEl);
  return scriptEl;
}

function getClassNameForKey(key: string) {
  return `app-${key}`;
}
