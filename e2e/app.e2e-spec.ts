import { AngularbootstrapPage } from './app.po';

describe('angularbootstrap App', () => {
  let page: AngularbootstrapPage;

  beforeEach(() => {
    page = new AngularbootstrapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
