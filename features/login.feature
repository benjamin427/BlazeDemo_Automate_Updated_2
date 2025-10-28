Feature: Login page

    Scenario: User enters login credentials
    Given Navigate to the website
    Then Enter login credentials
    | email_address                  | password   |
    | random@random.com              | testAdmin1 |
    Then Click the login button