Feature('Correct Status Code');

let urls = new DataTable(['url', 'statusCode']);
urls.add([
    'https://www.qa-legacy.com/us/obituaries/chicagotribune/name/bogus-name-obituary?pid=000000000', 404
]);
urls.add([
    'https://www.qa-legacy.com/us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=196167379', 200
]);

Data(urls).Scenario('Check status codes of multiple URLs', async ({ I, current }) => {
    const response = await I.sendGetRequest(current.url);

    I.assertEqual(response.status, current.statusCode);

}).tag('@productionSafe').tag('@REST').tag('@status_code').tag('@onboarding_project').tag('@onboarding_project_test');