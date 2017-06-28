import { SoapclubPage } from './app.po';

describe('soapclub App', () => {
  let page: SoapclubPage;

  beforeEach(() => {
    page = new SoapclubPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
