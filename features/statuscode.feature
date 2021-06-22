@productionSafe
@REST
@status_code
@onboarding_project
@onboarding_project_test


Feature: 404 Status Code
  I want to receive a 404 status code for my visit to a bogus Legacy.com obituary

  Scenario: 404 status code for bogus person
    Given I make a GET request with a bogus person
    Then I should receive status code 404

