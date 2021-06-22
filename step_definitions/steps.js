const { I, guestbookPage } = inject();

let response;
let person;

Given("I make a GET request with a bogus person", async () => {
  response = await I.sendGetRequest(
    "https://www.qa-legacy.com/us/obituaries/chicagotribune/name/bogus-name-obituary?pid=000000000"
  );
});

Then("I should receive status code 404", () => {
  I.assertEqual(response.status, 404);
});

Given("I visit a Legacy.com obituary", async () => {
  person = await I.getJanusPersonRecord();
  const personId = person.PersonId;
  guestbookPage.openPage(personId);
});

Then("I should see the correct name of the decedent", () => {
  const personName =
    person.FirstName + " " + person.MiddleName + " " + person.LastName;
  I.see(personName, { css: "div[data-component=NameHeadingText]" });
});

When("I scroll down the page to the guestbook", () => {
  I.scrollTo({ css: "div[data-component=GuestbookBox]" });
});

When("I click on the first field", () => {
  I.click({ css: "input[name=_GuestBookForm_From]" });
});

When("I fill out the fields with my info", () => {
  guestbookPage.createGuestBookEntry(
    "John Smith",
    "Ipsum lorem",
    "test@example.com"
  );
});

Then("I should be able to submit my message", () => {
  I.click("Submit Your Message");
});
