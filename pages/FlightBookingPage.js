const { expect } = require('@playwright/test');

class FlightBookingPage {
    constructor(page) {
        this.page = page;
    }

    async launchWebsite() {
        await this.page.goto('https://phptravels.net/');
        await expect(this.page).toHaveURL('https://phptravels.net/');
    }

    async acceptPopup() {
        await this.page.getByRole('button', { name: 'I Understand & Continue' }).click();
    }

    async navigateToFlights() {
        await this.page.getByRole('tab', { name: 'flight_takeoff Flights' }).click();
        await expect(this.page.getByRole('textbox', { name: 'Departure City or Airport' })).toBeVisible();
    }

    async selectOneWayTrip() {
        await this.page.getByText('One Way expand_more').click();
        await this.page.getByText('flight_takeoff One Way').click();
    }

    async enterFromCity(city) {
        await this.page.getByRole('textbox', { name: 'Departure City or Airport' }).click();
        await this.page.getByRole('textbox', { name: 'Departure City or Airport' }).fill(city);
        await this.page.getByText('Indira Gandhi Intl').click();
        await expect(this.page.getByRole('textbox', { name: 'Departure City or Airport' })).not.toBeEmpty();
    }

    async enterToCity(city) {
        await this.page.getByRole('textbox', { name: 'Arrival City or Airport' }).fill(city);
        await this.page.getByText('Chhatrapati Shivaji Intl').click();
        await expect(this.page.getByRole('textbox', { name: 'Arrival City or Airport' })).not.toBeEmpty();
    }

    async selectDepartureDate() {
        await this.page.getByText('30', { exact: true }).nth(5).click();
    }

    async clickSearchFlights() {
        await this.page.getByRole('button', { name: 'search Search Flights' }).click();
        await this.page.waitForLoadState('networkidle');
        await expect(this.page.getByRole('button', { name: 'search Search Flights' }).first()).toBeVisible();
    }

    async clickBookNow() {
        await this.page.getByRole('button', { name: 'flight_takeoff Book Now' }).first().click();
        await this.page.waitForLoadState('networkidle');
        await expect(this.page.getByRole('textbox', { name: 'Enter First Name' })).toBeVisible();
    }

    async enterPassengerDetails() {
        const titleDropdown = this.page.locator('select').first();
        await titleDropdown.waitFor({ state: 'visible', timeout: 15000 });
        await this.page.waitForTimeout(1000);
        await titleDropdown.selectOption({ label: 'Mr' });

        await this.page.getByRole('textbox', { name: 'Enter First Name' }).fill('KESHAV');
        await this.page.getByRole('textbox', { name: 'Enter Last Name' }).fill('GAIHLOT');
        await this.page.getByRole('textbox', { name: 'Enter Email' }).fill('keshavgaihlot@gmail.com');
        await this.page.getByRole('combobox').nth(1).selectOption('IN');
        await this.page.getByRole('textbox', { name: 'Enter Phone Number' }).fill('9876543210');
        await this.page.getByText('check').nth(4).click();
        await this.page.getByRole('combobox').nth(3).selectOption('IN');
        await this.page.locator('select:nth-child(3)').first().selectOption('2000');
        await this.page.getByRole('textbox', { name: '- 15 Numbers' }).fill('2456579907');
        await this.page.locator('.radio-container.mx-3 > .radio-custom').first().click();
        await this.page.locator('.pt-6 > .checkbox-item > .checkbox-container > .checkbox-custom > .material-symbols-outlined').click();

    
        await expect(this.page.getByRole('textbox', { name: 'Enter First Name' })).toHaveValue('KESHAV');
        await expect(this.page.getByRole('textbox', { name: 'Enter Last Name' })).toHaveValue('GAIHLOT');
        await expect(this.page.getByRole('textbox', { name: 'Enter Email' })).toHaveValue('keshavgaihlot@gmail.com');
    }

    async confirmFlightBooking() {
        await expect(this.page.getByRole('button', { name: 'lock Confirm Booking' })).toBeVisible();
        await this.page.getByRole('button', { name: 'lock Confirm Booking' }).click();
    }

    async verifyBookingSuccess() {
        await this.page.waitForURL(/invoice/, { timeout: 30000 });
        await expect(this.page).toHaveURL(/invoice/);
    }
}

module.exports = FlightBookingPage;