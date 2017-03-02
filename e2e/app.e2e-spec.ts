import { CssInspectPage } from './app.po';

describe('css-inspect App', () => {
  let page: CssInspectPage;

  beforeEach(() => {
    page = new CssInspectPage();
  });

  it('should display Resources on left hand side panel', () => {
    page.navigateTo();
    expect(page.getPanelText()).toEqual('Resources');
  });
});
