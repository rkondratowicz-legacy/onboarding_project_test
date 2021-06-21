Feature('Correct Name Appears and Guestbook Message Functional');

Scenario('Check name, scroll down page, fill and submit guestbook', async ({ I, guestbookPage }) => {

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
}).tag('@productionSafe').tag('@guestbook').tag('@Webdriver').tag('@onboarding_project').tag('@onboarding_project_test');