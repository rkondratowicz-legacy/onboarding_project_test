const { I } = inject();

module.exports = {
  navigateSteps() {
      // Open the page
      I.amOnPage('https://www.qa-legacy.com/us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=196167379');

      // Assert that the decedent's first name appears in the Name section
      I.see('Virginia Grace Gruchalski', { css: 'div[data-component=NameHeadingText]' });

      // Scroll down until the Guest Book is visible
      I.scrollTo({ css: 'div[data-component=GuestbookBox]' });

      // 'From' input box must be selected to show remainder of form / submit button
      I.click({ css: 'input[name=_GuestBookForm_From]' })
  },

  fields: {
    from: '_GuestBookForm_From',
    message: '_GuestBookForm_Message',
    email: '_GuestBookForm_Email'
  },

  createGuestBookEntry(name, message, email) {
    I.fillField(this.fields.from, name);
    I.fillField(this.fields.message, message);
    I.fillField(this.fields.email, email);
    I.click('Submit Your Message');
  }
}
