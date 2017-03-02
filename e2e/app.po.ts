import { browser, element, by } from 'protractor';

export class CssInspectPage {
  navigateTo() {
    return browser.get('/');
  }
  getPanelText(){
    return element(by.className('header')).getText();
  }
}
