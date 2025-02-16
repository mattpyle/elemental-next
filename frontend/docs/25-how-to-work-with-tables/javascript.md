---
language: javascript
level: 2
hide_sidebar: true
publish_date: 2015-10-13
last_update:
  date: 2023-03-24
---

## A Solution

You can easily traverse a table through the use of [CSS Pseudo-classes](http://www.w3schools.com/css/css_pseudo_classes.asp).

But keep in mind that if you care about older browsers (e.g., Internet Explorer 8, et al), then this approach won't work on them. In those cases your best bet is to find a workable solution for the short term and get a front-end developer to update the table with helpful attributes.

>### _**A quick primer on Tables and CSS Pseudo-classes**_
>
>Understanding the broad strokes of an HTML table's structure goes a long way in writing effective automation against it. So here's a quick primer.
>
>>A table has:
>>+ a header (e.g. `<thead>`)
>>+ a body (e.g. `<tbody>`).
>>+ rows (e.g. `<tr>`) -- horizontal slats of data
>>+ columns -- vertical slats of data
>
>>Columns are made up of cells, which are:
>>+ a header (e.g., `<th>`)
>>+ one or more standard cells (e.g., `<td>` -- which is short for __table data__)
>
>CSS Pseudo-classes work by walking through the structure of an object and targeting a specific part of it based on a relative number (e.g. the __third__ `<td>` cell from a row in the table body). This works well with tables since we can grab all instances of a target (e.g. the third `<td>` cell from each `<tr>` in the table body) and use it in our test -- which would give us all of the data for the third column.

Let's step through some examples for a common set of table functionality like sorting columns in ascending and descending order.

## Example 1

__NOTE: You can see the application under test [here](http://the-internet.herokuapp.com/tables). It's an example from [the-internet](https://github.com/tourdedave/the-internet). In the example there are 2 tables. We will start with the first table and then work with the second.__

We kick things off by pulling in our requisite libraries, declare our test class, and wire up some test setup and teardown methods.

```javascript
// filename: test/tables.spec.js
const assert = require("assert");
const { Builder, By, Key } = require("selenium-webdriver");

describe("Tables", function() {
  let driver;

  beforeEach(async function() {
  this.timeout(60000);
    driver = await new Builder().forBrowser("chrome").build();
  });

  afterEach(async function() {
    await driver.quit();
  });
// ...
```

Here is the markup from the first table example we're working with. Note that it does not have any `id` or `class` attributes.

```html
<table id="table1" class="tablesorter">
    <thead>
      <tr>
        <th><span>Last Name</span></th>
        <th><span>First Name</span></th>
        <th><span>Email</span></th>
        <th><span>Due</span></th>
        <th><span>Web Site</span></th>
        <th><span>Action</span></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Smith</td>
        <td>John</td>
        <td>jsmith@gmail.com</td>
        <td>$50.00</td>
        <td>http://www.jsmith.com</td>
        <td>
          <a href='#edit'>edit</a>
          <a href='#delete'>delete</a>
        </td>
      </tr>
```

There are 6 columns (`Last Name`, `First Name`, `Email`, `Due`, `Web Site`, and `Action`). Each one is sortable by clicking on the column header. The first click should sort them in ascending order, the second click in descending order.

There is a small sampling of data in the table to work with (4 rows worth). So we should be able to sort the data, grab it, and confirm that it sorted correctly. So lets do that in our first test with the `Due` column using a CSS pseudo Class.

```javascript
// filename: test/tables.spec.js
// ...
  it("should sort number column in ascending order", async function() {
    await driver.get("http://the-internet.herokuapp.com/tables");
    await driver
      .findElement(By.css("#table1 thead tr th:nth-of-type(4)"))
      .click();
    const due_column = await driver.findElements(
      By.css("#table1 tbody tr td:nth-of-type(4)")
    );
    let dues = [];
    for (const entry in due_column) {
      const text = await due_column[entry].getText();
      dues.push(Number(text.replace("$", "")));
    }
    assert(dues === dues.sort());
  });
// ...
```

After loading the page we find and click the column heading that we want with a CSS pseudo-class (e.g. `#table1 thead tr th:nth-of-type(4)`). This locator targets the 4th `<th>` element in the table heading section (e.g., `<thead>`) (which is the `Due` column heading).

We then use another pseudo-class to find all `<td>` elements within the `Due` column by looking for the 4th `<td>` of each row in the table body. Once we have them we grab each of their text values, clean them up (`.replace('$','')`), convert them to a number (`Number()`), and store them all in a array called `dues`. We then compare this collection to a sorted version of itself to see if they match. If they do, then the `Due` column was sorted in ascending order and the test will pass.

If we wanted to test for descending order, we would need to click the `Due` heading twice after loading the page. Other than that the code is identical except for the assertion which is checking the same thing but reversing the sort order.

```javascript
// filename: test/tables.spec.js
// ...
  it("should sort number column in descending order", async function() {
    await driver.get("http://the-internet.herokuapp.com/tables");
    await driver
      .findElement(By.css("#table1 thead tr th:nth-of-type(4)"))
      .click();
    await driver
      .findElement(By.css("#table1 thead tr th:nth-of-type(4)"))
      .click();
    const due_column = await driver.findElements(
      By.css("#table1 tbody tr td:nth-of-type(4)")
    );
    let dues = [];
    for (const entry in due_column) {
      const text = await due_column[entry].getText();
      dues.push(Number(text.replace("$", "")));
    }
    assert(dues === dues.sort().reverse());
  });
// ...
```

We can easily use this approach to test a different column (e.g., one that doesn't deal with numbers) and see that it gets sorted correctly too. Here's a test that exercises the `Email` column.

```javascript
// filename: test/tables.spec.js
// ...
  it("should sort text column in ascending", async function() {
    await driver.get("http://the-internet.herokuapp.com/tables");
    await driver
      .findElement(By.css("#table1 thead tr th:nth-of-type(3)"))
      .click();
    const email_column = await driver.findElements(
      By.css("#table1 tbody tr td:nth-of-type(3)")
    );
    let emails = [];
    for (const entry in email_column) {
      emails.push(await email_column[entry].getText());
    }
    assert(emails === emails.sort());
  });
// ...
```

The mechanism for this is the same except that we don't need to clean the text up or convert it before performing our assertion.

## Example 2

But what about older browsers?

If we run these against an older browser (e.g., Internet Explorer 8, etc.) it will throw an exception stating `Unable to find element`. This is because older browsers don't support CSS Pseudo-classes.

You've come a long way, so it's best to get value out of what you've just written. To do that you can run these tests on __current browsers__ and submit a request to your front-end developers to update the table markup with some semantic `class` attributes. Later, when these new locators have been implemented on the page, you can revisit these tests and update them accordingly.

Here is markup of what our original table would look like with some helpful attributes added in. It's also the markup from the second example of [our application under test](http://the-internet.herokuapp.com/tables).

```html
<table id="table2" class="tablesorter">
    <thead>
      <tr> <th><span class='last-name'>Last Name</span></th>
        <th><span class='first-name'>First Name</span></th>
        <th><span class='email'>Email</span></th>
        <th><span class='dues'>Due</span></th>
        <th><span class='web-site'>Web Site</span></th>
        <th><span class='action'>Action</span></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class='last-name'>Smith</td>
        <td class='first-name'>John</td>
        <td class='email'>jsmith@gmail.com</td>
        <td class='dues'>$50.00</td>
        <td class='web-site'>http://www.jsmith.com</td>
        <td class='action'>
          <a href='#edit'>edit</a>
          <a href='#delete'>delete</a>
        </td>
      </tr>
```

With these new attributes the locators in our sorting tests become a lot simpler and more expressive. Let's write a new `Due` ascending order test to demonstrate.

```javascript
// filename: test/tables.spec.js
// ...
  it("sort number column in ascending order with helpful locators", async function() {
    await driver.get("http://the-internet.herokuapp.com/tables");
    driver.findElement(By.css("#table2 thead .dues")).click();
    const due_column = await driver.findElements(By.css("#table2 tbody .dues"));
    let dues = [];
    for (const entry in due_column) {
      const text = await due_column[entry].getText();
      dues.push(Number(text.replace("$", "")));
    }
    assert(dues === dues.sort());
  });
});
```

Not only will these selectors work in current _and_ older browsers, but they are also more resilient to changes in the table layout since they are not using hard-coded numbers that rely on the column order.

## Expected Behavior

When we save this file and run it (e.g., `mocha` from the command-line) here is what will happen:

+ Browser opens
+ Load the page
+ Click the column heading
+ Grab the values for the target column
+ Assert that the column is sorted in the correct order (ascending or descending depending on the test)
+ Close the browser

## Summary

CSS Pseudo-classes are a great resource and unlock a lot of potential for your tests; enabling a bit of CSS gymnastics assuming you've come up with a test strategy that rules out older browsers. If you don't have a test strategy or are curious to see how yours compares, check out [tip 18](/docs/what-to-test/18-what-to-test).

For more info on CSS Pseudo-classes see [this write-up by Sauce Labs](https://saucelabs.com/resources/selenium/css-selectors), and maybe [the W3C spec CSS3](http://www.w3.org/TR/css3-selectors/#structural-pseudos) if you're feeling adventurous. And for a more in-depth walk-through on HTML Table design check out Treehouse's write-up [here](http://blog.teamtreehouse.com/how-to-code-sortable-tabular-data-with-jquery).

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.

![Dave Haeffner profile picture](/img/authors/dave-haeffner.jpeg#author-img 'a title')
