---
language: csharp
level: 2
hide_sidebar: true
publish_date: 2016-06-13
last_update:
  date: 2023-03-30
---

## A Solution

By leveraging some simple JavaScript and CSS styling, we can highlight the element on the page that we're targeting. This way we can visually inspect it to make sure it is the one that we want.

Let's take a look at an example.

## Example

First let's include our requisite classes for our test framework (e.g., `NUnit.Framework`), driving the browser with Selenium (e.g., `OpenQA.Selenium`, etc.), access to C# collections (e.g., `System.Collections.Generic`), and start our class off with some setup and teardown methods.

```csharp
// filename: HighlightElements.cs
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using System.Threading;

public class HighlightElements
{
    IWebDriver Driver;
    IJavaScriptExecutor JSDriver;

    [SetUp]
    public void SetUp()
    {
        Driver = new FirefoxDriver();
        JSDriver = (IJavaScriptExecutor) Driver;
    }

    [TearDown]
    public void TearDown()
    {
        Driver.Quit();
    }
// ...
```

Now let's create a `HighlightElement` helper method that will accept a Selenium WebDriver `IWebElement` and a time to wait (e.g., `Duration`) as parameters.

By setting a duration we can control how long to highlight an element on the page before reverting the styling back. And we can make this an optional argument by setting a sensible default (e.g., 3 seconds).

```csharp
// filename: HighlightElements.cs
// ...
    private void HighlightElement(IWebElement Element, int Duration = 3)
    {
        string OriginalStyle = Element.GetAttribute("style");

        JSDriver.ExecuteScript("arguments[0].setAttribute(arguments[1], arguments[2])",
                               Element,
                               "style",
                               "border: 2px solid red; border-style: dashed;");

        Thread.Sleep(Duration * 1000);
        JSDriver.ExecuteScript("arguments[0].setAttribute(arguments[1], arguments[2])",
                               Element,
                               "style",
                               OriginalStyle);
    }
// ...
```

There are three things going on here.

- We store the style of the element so we can revert it back when we're done
- We change the style of the element so it visually stands out (e.g., a red dashed border)
- We revert the style of the element back after 3 seconds (or longer if specified)

We're accomplishing the style change through JavaScript's `setAttribute` function. And we're executing it with Selenium's `ExecuteScript` command.

Now to use this in our test is a simple matter to finding an element and passing it to `HighlightElement`.

```csharp
// filename: HighlightElements.cs
// ...
    [Test]
    public void HighlightElementExample()
    {
        Driver.Navigate().GoToUrl("http://the-internet.herokuapp.com/large");
        IWebElement TargetElement = Driver.FindElement(By.Id("sibling-2.3"));
        HighlightElement(TargetElement);
    }

}
```

## Expected Behavior

When you save this file and run it (e.g., `nunit3-console.exe .\HighlightElements.sln` from the command-line) here is what will happen.

- Open the browser
- Load the page
- Find the element to highlight
- Change the styling of the element so it has a red dashed-line border
- Wait 3 seconds
- Revert the styling of the element back (removing the red border)
- Close the browser

## Summary

If you wanted to take this a step further, you could leverage this approach along with an interactive debugger.

Alternatively, you could verify your locators by using a browser plugin like FireFinder.

Happy Testing!

## About The Author

You can follow Brian D. Goad on Twitter at [@bbbco](https://twitter.com/bbbco).

![Brian D. Goad profile picture](/img/authors/brian-goad.jpeg#author-img 'a title')

