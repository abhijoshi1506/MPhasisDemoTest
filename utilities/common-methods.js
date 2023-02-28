module.exports = {
    
    async isElementDisplayed(element) {
      try {
          return await element.isDisplayed();
      } catch (error) {
          fail("Failed due to exception " + error);
      }
  },
  async isElementEnabled(element) {
      try {
          return await element.isEnabled();
      } catch (error) {
          fail("Failed due to exception " + error);
      }
  },
  async isElementClickable(element) {
      try {
          let classes = await element.getAttribute('class');
          return !(await classes.includes("disabled"));
  
      } catch (error) {
          fail("Failed due to exception " + error);
      }
  },
  async getElementText(element) {
      try {
          await element.waitForDisplayed();
          return await element.getText();
      } catch (error) {
          fail("Failed due to exception " + error);
      }
  },
  async setElementText(element,text) {
    try {
        await element.click();
        await element.setValue(text);
    } catch (error) {
        fail("Failed due to exception " + error);
    }
},
  async clickOnElement(element) {
      try {
         // await element.waitForClickable();
          return await element.click();
      } catch (error) {
          fail("Failed due to exception " + error);
      }
  }
  
  };