const RetirementCalculatorPage = require('../pageobjects/retirement-calculator');
const commonUtilities = require('../../utilities/common-methods');
const testData = require('../resources/retirement-calculator-testData.json');

describe("Navigation to Retirement Calculator WebPage", () => {
    beforeAll(async function () {
      await RetirementCalculatorPage.open();
      
    });
    it('should navigate to Retirement Calculator WebPage', async () => {
        await RetirementCalculatorPage.open();
        await expect(browser).toHaveTitle('How Much to Save for Retirement | Securian Financial');
        browser.maximizeWindow();
    });
  });

describe('Validation of Retirement Calculator WebPage', () => {
    it('Verify presence required fields in Retirement Calculator WebPage', async () => {
         expect(await commonUtilities.isElementDisplayed(RetirementCalculatorPage.inputCurrentAge)).toEqual(true);
         expect(await commonUtilities.isElementDisplayed(RetirementCalculatorPage.inputRetirementAge)).toBe(true);
         expect(await commonUtilities.isElementDisplayed(RetirementCalculatorPage.inputCurrentIncome)).toBe(true);
         expect(await commonUtilities.isElementDisplayed(RetirementCalculatorPage.inputSpouseIncome)).toBe(true);
         expect(await commonUtilities.isElementDisplayed(RetirementCalculatorPage.inputCurrentRetirementSaving)).toBe(true);
         expect(await commonUtilities.isElementDisplayed(RetirementCalculatorPage.inputAnnualIncreaseContribution)).toBe(true);
         expect(await commonUtilities.isElementDisplayed(RetirementCalculatorPage.selectSocialSecurityIncomeAsYes)).toBe(true);
         expect(await commonUtilities.isElementDisplayed(RetirementCalculatorPage.btnCalculate)).toBe(true);
        
    });

    it('Verify functionality of Social Benifits Toggle', async () => {
        await commonUtilities.clickOnElement(RetirementCalculatorPage.selectSocialSecurityIncomeAsYes);
        expect(await commonUtilities.isElementDisplayed(RetirementCalculatorPage.socialBenifitLabel)).toBe(true);
        expect(await commonUtilities.isElementDisplayed(RetirementCalculatorPage.maritalStatusLabel)).toBe(true); 
        
    });

    it('Verify functionality Updating Default Values', async () => {
        await commonUtilities.clickOnElement(RetirementCalculatorPage.linkAdjustDefaultValues);
        await commonUtilities.setElementText(RetirementCalculatorPage.additionalIncome,testData.additionalIncome);
        await commonUtilities.setElementText(RetirementCalculatorPage.retirementDuration,testData.retirementDuration);
        await commonUtilities.clickOnElement(RetirementCalculatorPage.postRetirementInflation);
        await browser.pause(1000);
        await commonUtilities.setElementText(RetirementCalculatorPage.postRetirementExpectedInflation,testData.postRetirementExpectedInflation);
        await commonUtilities.clickOnElement(RetirementCalculatorPage.btnSave);    
    });

    it('Verify functionality of Submit button after filling required data', async () => {
        await RetirementCalculatorPage.inputCurrentAge.setValue(testData.currentAge);
        await RetirementCalculatorPage.inputRetirementAge.setValue(testData.retirementAge);
        await commonUtilities.setElementText(RetirementCalculatorPage.inputCurrentIncome,testData.currentAnnualIncome);
        await commonUtilities.setElementText(RetirementCalculatorPage.inputSpouseIncome,testData.spouseIncome);
        await commonUtilities.setElementText(RetirementCalculatorPage.inputCurrentRetirementSaving,testData.currentBalance);
        await commonUtilities.setElementText(RetirementCalculatorPage.inputCurrentAnnualRetirementSaving,testData.currentRetContibution);
        await commonUtilities.setElementText(RetirementCalculatorPage.inputAnnualIncreaseContribution,testData.annualIncreaseRateContribution);
        if(testData.socialSecurityIncome){
        await commonUtilities.clickOnElement(RetirementCalculatorPage.selectSocialSecurityIncomeAsYes);
         }else{
        await commonUtilities.clickOnElement(RetirementCalculatorPage.selectSocialSecurityIncomeAsNo);
        }
        await commonUtilities.clickOnElement(RetirementCalculatorPage.btnCalculate);
        await browser.pause(1000);
        expect(await commonUtilities.isElementDisplayed(RetirementCalculatorPage.resultChart)).toBe(true);
    });
});


