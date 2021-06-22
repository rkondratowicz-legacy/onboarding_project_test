@productionSafe
@guestbook
@Webdriver
@onboarding_project_test
@onboarding_project

Feature: Correct Name Appears and Guestbook Message Functional
    I want to check the name, scroll down the page, fill the guestbook and submit my message

    Scenario: Check name, scroll down page, fill and submit guestbook
        Given I visit a Legacy.com obituary
        Then I should see the correct name of the decedent
        When I scroll down the page to the guestbook
        And I click on the first field
        And I fill out the fields with my info
        Then I should be able to submit my message

