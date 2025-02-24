Feature: End to end Ecommerce validation

    Scenario: Ecommerce products delivery
        Given I am on Ecommerce Page
        When I am login to the application
        And I add items to cart and checkout
        And Validate the total price limit
        Then select the country submit and verify Thankyou

    Scenario Outline: Ecommerce products delivery
        Given I am on Ecommerce Page
        When I am login to the application
        | username                    | password |
        | rahulshettyacademy          | learning |
        And I add items to cart and checkout
        And Validate the total price limit
        Then select the country submit and verify Thankyou

