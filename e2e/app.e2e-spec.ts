import { CssInspectPage } from './app.po';

describe('css-inspect App', () => {
  let page: CssInspectPage;

  beforeEach(() => {
    page = new CssInspectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
