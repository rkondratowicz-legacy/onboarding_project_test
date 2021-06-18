Feature('test guestbook');

Scenario('test something', ({ I, guestbookPage }) => {
    // Open page, check name, scroll to message box, click on input field:
    guestbookPage.navigateSteps();
    
    // Fill fields with visitor info:
    guestbookPage.createGuestBookEntry(
        'John Smith',
        'Ipsum lorem',
        'test@example.com'
    );

    // 'npx codeceptjs run' to begin test
});