import { Builder, By, until, WebDriver } from 'selenium-webdriver';

(async function runTests() {
  // Initialize the Chrome WebDriver
  const driver: WebDriver = await new Builder().forBrowser('chrome').build();

  try {
    // Open the HTML form page
    await driver.get('file:///home/abhijit/Blood-Pact-Using-Blockchain/frontend/index.html');

    const testCases = [
      {
        name: 'Valid Case',
        inputs: {
          name: 'John Doe',
          age: '30',
          password: 'password',
          email: 'johndoe@example.com',
          rewritePassword: 'password',
        },
        expectedResult: 'Name: John Doe\nAge: 30\nEmail: johndoe@example.com\nPassword: ********\nRewrite Password: ********',
      },
      {
        name: 'Empty Fields',
        inputs: {
          name: '',
          age: '',
          password: '',
          email: '',
          rewritePassword: '',
        },
        expectedResult: 'Please fill in all fields.',
      },
      {
        name: 'Invalid Email',
        inputs: {
          name: 'Alice',
          age: '25',
          password: 'pass1234',
          email: 'invalid-email',
          rewritePassword: 'pass1234',
        },
        expectedResult: 'Name: Alice\nAge: 25\nEmail: invalid-email\nPassword: ********\nRewrite Password: ********\nPassword and Rewrite Password do not match.',
      },
      {
        name: 'Password Mismatch',
        inputs: {
          name: 'Bob',
          age: '35',
          password: 'pass1234',
          email: 'bob@example.com',
          rewritePassword: 'mismatch',
        },
        expectedResult: 'Name: Bob\nAge: 35\nEmail: bob@example.com\nPassword: ********\nRewrite Password: ********\nPassword and Rewrite Password do not match.',
      },
      {
        name: 'Short Password',
        inputs: {
          name: 'Eve',
          age: '28',
          password: 'short',
          email: 'eve@example.com',
          rewritePassword: 'short',
        },
        expectedResult: 'Name: Eve\nAge: 28\nEmail: eve@example.com\nPassword: ********\nRewrite Password: ********\nPassword and Rewrite Password do not match.',
      },
    ];

    for (const testCase of testCases) {
      // Fill in the form fields
      await driver.findElement(By.id('name')).sendKeys(testCase.inputs.name);
      await driver.findElement(By.id('age')).sendKeys(testCase.inputs.age);
      await driver.findElement(By.id('password')).sendKeys(testCase.inputs.password);
      await driver.findElement(By.id('email')).sendKeys(testCase.inputs.email);
      await driver.findElement(By.id('rewritePassword')).sendKeys(testCase.inputs.rewritePassword);

      // Submit the form
      await driver.findElement(By.css("input[type='submit']")).click();

      // Wait for the result to be displayed
      await driver.wait(until.elementLocated(By.id('result'), 10000));

      // Find and assert the result text
      const resultText = await driver.findElement(By.id('result')).getText();
      if (resultText === testCase.expectedResult) {
        console.log(`Test '${testCase.name}' passed.`);
      } else {
        console.log(`Test '${testCase.name}' failed.`);
      }

      // Clear the form fields for the next test
      await driver.findElement(By.id('name')).clear();
      await driver.findElement(By.id('age')).clear();
      await driver.findElement(By.id('password')).clear();
      await driver.findElement(By.id('email')).clear();
      await driver.findElement(By.id('rewritePassword')).clear();
    }

  } finally {
    // Close the browser
    await driver.quit();
  }
})();

