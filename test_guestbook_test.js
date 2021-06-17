Feature('test guestbook');

Scenario('test something', ({ I }) => {
    // Open the page
    I.amOnPage('https://www.qa-legacy.com/us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=196167379');
    // Assert that the decedent's first name appears in the Name section
    I.see('Virginia Grace Gruchalski', { css: 'div[data-component=NameHeadingText]' });
    // Scroll down until the Guest Book is visible
    I.scrollTo({ css: 'div[data-component=GuestbookBox]' });
    // 'From' input box must be selected to show remainder of form / submit button
    I.click({ css: 'input[name=_GuestBookForm_From]' });
    // Fill fields with visitor info
    I.fillField('_GuestBookForm_From', 'John Smith');
    I.fillField('_GuestBookForm_Message', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet euismod augue, sit amet facilisis massa. Nullam vehicula lacus felis, dictum volutpat enim lacinia quis.');
    I.fillField('_GuestBookForm_Email', 'test@example.com');
    // Click submit button
    I.click('Submit Your Message');

    // 'npx codeceptjs run' to begin test
});