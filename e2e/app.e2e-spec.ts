import { AngularWizardPage } from './app.po';

describe('angular-wizard App', () => {
  let page: AngularWizardPage;

  beforeEach(() => {
    page = new AngularWizardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
