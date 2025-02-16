---
language: csharp
level: 2
hide_sidebar: true
publish_date: 2016-06-13
last_update:
  date: 2023-03-30
---

## A Solution

[WebDriver](https://www.selenium.dev/documentation/webdriver/) works with each of the major browsers through a browser driver which is (ideally) maintained by the browser manufacturer. It is an executable file (consider it a thin layer or a shim) that acts as a bridge between Selenium and the browser.

[ChromeDriver](https://chromedriver.chromium.org/downloads) is Google Chrome's browser driver. In this specific use case is of using WebDriver with Chrome in testing locally.

Let's step through an example using ChromeDriver ([download here](https://chromedriver.chromium.org/downloads)).

## Example

Before starting, we'll need to download the latest ChromeDriver binary executable from [here](http://chromedriver.storage.googleapis.com/index.html). Once we have it we'll need to tell Selenium where it is. Two ways we can do this are to:

- Add it to the System PATH
- Specify it in the Selenium setup

Let's start by including our requisite classes for our test framework (e.g., `using NUnit.Framework`), driving the browser with Selenium (e.g., `using OpenQA.Selenium`, etc.), accessing C# methods to work with the local file system (e.g., `using System.IO`), and start our class with some setup and teardown methods.

```csharp
// filename: Chrome.cs
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System.IO;

public class Chrome
{
    IWebDriver Driver;
    string VendorDirectory = Directory.GetParent(
        Path.GetDirectoryName(typeof(Chrome).Assembly.Location)).
            Parent.FullName + @"\Vendor";

    [SetUp]
    public void SetUp()
    {
        Driver = new ChromeDriver(VendorDirectory);
    }

    [TearDown]
    public void TearDown()
    {
        Driver.Quit();
    }
// ...
```

Notice the field variable declaration for `VendorDirectory`. With it we are effectively grabbing the full path of the project directory and appending the `Vendor` directory to it. This is then put to use when creating an instance of Chrome (e.g., `Driver = new ChromeDriver(VendorDirectory);`).

Now we're ready to add a test.

```csharp
// filename: Chrome.cs
// ...
    [Test]
    public void PageLoads()
    {
        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com");
        Assert.That(Driver.Title.Equals("The Internet"));
    }
}
```

If we save this file and run the project (e.g., `nunit3-console.exe .\Chrome.sln`) it will launch an instance of Chrome, visit the homepage of [the-internet](http://the-internet.herokuapp.com/), and assert that the page title loaded.

## Expected Behavior

When you save this file and run the project (e.g., `nunit3-console.exe .\Chrome.sln` from the command-line) here is what will happen.

- ChromeDriver starts
- Chrome opens
- Test runs
- Chrome closes
- ChromeDriver stops

## Summary

Hopefully this tip has helped you get a better handle on how WebDriver works with various browsers and saved you some time in your configuration setup. But keep in mind that no two browser drivers are alike, so be sure to check out the documentation for the browser you care about to find out it's specific requirements. For more about specific driver requirements, visit the official [Selenium Quick Reference page for Installing Browser Drivers](https://www.selenium.dev/documentation/webdriver/getting_started/install_drivers/#quick-reference).

Happy Testing!

## About The Author

Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against).

Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing.

![Dave Haeffner profile picture](/img/authors/dave-haeffner.jpeg#author-img 'a title')
