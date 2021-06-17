Feature('test guestbook');

Scenario('test something', ({ I }) => {
    I.amOnPage('https://www.qa-legacy.com/us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=196167379');
    I.see('Virginia Grace Gruchalski', { css: 'div[data-component=NameHeadingText]' });
    I.scrollTo({ css: 'div[data-component=GuestbookBox]' });
    I.click({ css: 'input[name=_GuestBookForm_From]' });
    I.fillField('_GuestBookForm_From', 'John Smith');
    I.fillField('_GuestBookForm_Message', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet euismod augue, sit amet facilisis massa. Nullam vehicula lacus felis, dictum volutpat enim lacinia quis.');
    I.fillField('_GuestBookForm_Email', 'test@example.com');
    I.click('Submit Your Message');
});