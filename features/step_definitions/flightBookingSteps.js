const { Given, When, Then } = require('@cucumber/cucumber');
const FlightBookingPage = require('../../pages/FlightBookingPage');

let bookingPage;

Given('User launches PHPTravels website', async function () {
    bookingPage = new FlightBookingPage(this.page);
    await bookingPage.launchWebsite();
});

Given('User accepts popup', async function () {
    await bookingPage.acceptPopup();
});

Given('User navigates to flights page', async function () {
    await bookingPage.navigateToFlights();
});

Given('User selects one way trip', async function () {
    await bookingPage.selectOneWayTrip();
});

Given('User enters source city {string}', async function (city) {
    await bookingPage.enterFromCity(city);
});

Given('User enters destination city {string}', async function (city) {
    await bookingPage.enterToCity(city);
});

Given('User selects departure date', async function () {
    await bookingPage.selectDepartureDate();
});

Given('User clicks on search flights', async function () {
    await bookingPage.clickSearchFlights();
});

Given('User books first available flight', async function () {
    await bookingPage.clickBookNow();
});

Given('User enters passenger details', async function () {
    await bookingPage.enterPassengerDetails();
});

Given('User confirms booking', async function () {
    await bookingPage.confirmFlightBooking();
});

Then('Booking should be successful', async function () {
    await bookingPage.verifyBookingSuccess();
});