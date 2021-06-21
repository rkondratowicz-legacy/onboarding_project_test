Feature('test guestbook');

Scenario('test something', async ({ I, guestbookPage }) => {

    // Query the DB with Person Helper
    const person = await I.getJanusPersonRecord();
    const personId = person.PersonId;
    const personName = person.FirstName + ' ' + person.MiddleName + ' ' + person.LastName;

    // Open page:
    guestbookPage.openPage(personId);
    
    // Check name, scroll to message box, click on input field:
    guestbookPage.navigateSteps(personName);
    
    // Fill fields with visitor info:
    guestbookPage.createGuestBookEntry(
        'John Smith',
        'Ipsum lorem',
        'test@example.com'
    );

    // 'npx codeceptjs run' to begin test
});