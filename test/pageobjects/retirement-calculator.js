const Page = require('./page');


class RetirementCalculatorPage extends Page {
   
    get inputCurrentAge() {
        return $('//*[@id="current-age"]');
    }

    get inputRetirementAge() {
        return $('//*[@id="retirement-age"]');
    }

    get inputCurrentIncome() {
        return $('//input[@id="current-income"]');
    }

    get inputSpouseIncome() {
        return $('//*[@id="spouse-income"]');
    }

    get inputCurrentRetirementSaving() {
        return $('//*[@id="current-total-savings"]');
    }

    get inputCurrentAnnualRetirementSaving() {
        return $('//*[@id="current-annual-savings"]');
    }

    get inputAnnualIncreaseContribution() {
        return $('//*[@id="savings-increase-rate"]');
    }

    get selectSocialSecurityIncomeAsYes() {
        return $('//*[@id="include-social-container"]/ul/li[1]/label');
    }

    get selectSocialSecurityIncomeAsNo() {
        return $('//*[@id="include-social-container"]/ul/li[2]/label');
    }

    get socialBenifitLabel() {
        return $('//*[@id="include-social-container"]/ul/li[1]/label');
    }

    get maritalStatusLabel() {
        return $('//*[@id="single"]');
    }

    get btnCalculate() {
        return $('//*[@data-tag-id="submit"]');
    }

    get linkAdjustDefaultValues() {
        return $('//*[@id="retirement-form"]/div[4]/div[1]/div/div/div/ul/li[2]/a');
    }

    get resultChart() {
        return $('//*[@id="results-chart"]');
    }

    get additionalIncome() {
        return $('//*[@id="additional-income"]');
    }

    get retirementDuration() {
        return $('//*[@id="retirement-duration"]');
    }

    get postRetirementInflation() {
        return $('//*[@id="include-inflation-container"]/ul/li[1]/label');
    }

    get postRetirementExpectedInflation() {
        return $('//*[@id="expected-inflation-rate"]');
    }
    get btnSave() {
        return $('//*[@id="default-values-form"]/div[2]/div/div[1]/button');
    }
    //Methods

    open () {
        return super.open('insights-tools/retirement-calculator.html');
    }
}

module.exports = new RetirementCalculatorPage();
