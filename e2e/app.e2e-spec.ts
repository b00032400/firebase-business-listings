import { FirebaseBusinessListingsPage } from './app.po';

describe('firebase-business-listings App', () => {
  let page: FirebaseBusinessListingsPage;

  beforeEach(() => {
    page = new FirebaseBusinessListingsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
