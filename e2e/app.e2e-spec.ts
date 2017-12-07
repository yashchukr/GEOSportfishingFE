import { GEOSportfishingPage } from './app.po';

describe('geosportfishing App', () => {
  let page: GEOSportfishingPage;

  beforeEach(() => {
    page = new GEOSportfishingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
