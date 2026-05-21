Feature: Flight Booking

  Scenario: User books one way flight successfully

    Given User launches PHPTravels website
    And User accepts popup
    And User navigates to flights page
    And User selects one way trip
    And User enters source city "Delhi"
    And User enters destination city "Mumbai"
    And User selects departure date
    And User clicks on search flights
    And User books first available flight
    And User enters passenger details
    And User confirms booking
    Then Booking should be successful
