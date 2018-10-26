import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to exo!');
  });

  it('should test password', () => {

    // browser.get('/');
    const input = element(by.css('app-password input[type=password]'));
    input.clear();
    browser.sleep(2000);
    input.sendKeys('coucou');
    browser.sleep(2000);
    const message = element(by.css('app-root .message')).getText();
    expect(message).toEqual('coucou');
  });
});
