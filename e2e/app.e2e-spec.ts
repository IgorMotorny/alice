import { FinderPage } from './app.po';

describe('finder App', () => {
  let page: FinderPage;

  beforeEach(() => {
    page = new FinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
