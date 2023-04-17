"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3596],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3050:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"Ruby",id:"49-performance-testing-ruby",slug:"ruby/",number:49,publish_date:new Date("2014-05-06T00:00:00.000Z"),last_update:{date:new Date("2023-04-06T00:00:00.000Z")},tags:["performance testing","proxy","browsermob-proxy","yslow"],level:3,category:"fundamentals",language:"ruby"},i="How to Do Performance Testing",l={unversionedId:"updated-tips/performance-testing/49-performance-testing-ruby",id:"updated-tips/performance-testing/49-performance-testing-ruby",title:"Ruby",description:"Intro",source:"@site/docs/updated-tips/49-performance-testing/49-performance-testing-ruby.md",sourceDirName:"updated-tips/49-performance-testing",slug:"/updated-tips/performance-testing/ruby/",permalink:"/elemental-next/docs/updated-tips/performance-testing/ruby/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/updated-tips/49-performance-testing/49-performance-testing-ruby.md",tags:[{label:"performance testing",permalink:"/elemental-next/docs/tags/performance-testing"},{label:"proxy",permalink:"/elemental-next/docs/tags/proxy"},{label:"browsermob-proxy",permalink:"/elemental-next/docs/tags/browsermob-proxy"},{label:"yslow",permalink:"/elemental-next/docs/tags/yslow"}],version:"current",sidebarPosition:49,frontMatter:{title:"Ruby",id:"49-performance-testing-ruby",slug:"ruby/",number:49,publish_date:"2014-05-06T00:00:00.000Z",last_update:{date:"2023-04-06T00:00:00.000Z"},tags:["performance testing","proxy","browsermob-proxy","yslow"],level:3,category:"fundamentals",language:"ruby"},sidebar:"tutorialSidebar",previous:{title:"Ruby",permalink:"/elemental-next/docs/updated-tips/load-testing/ruby/"},next:{title:"CSharp",permalink:"/elemental-next/docs/updated-tips/how-to-work-with-hovers/csharp/"}},s={},p=[{value:"Intro",id:"intro",level:2},{value:"A Solution",id:"a-solution",level:2},{value:"Example",id:"example",level:2},{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Summary",id:"summary",level:2},{value:"About The Author",id:"about-the-author",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-do-performance-testing"},"How to Do Performance Testing"),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"Odds are pretty good that your production application has some kind of performance monitoring in place (e.g., New Relic). This goes a long way towards identifying when something detrimental has been released into the wild."),(0,a.kt)("p",null,"But how do you catch performance issues before they reach production?"),(0,a.kt)("h2",{id:"a-solution"},"A Solution"),(0,a.kt)("p",null,"By repurposing a Selenium script, we can run it through a proxy server and capture the HTTP traffic. With this traffic, we can run some simple checks to see if the application's performance has degraded."),(0,a.kt)("p",null,"Let's dig in with an example."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Before we get started we'll need to ",(0,a.kt)("a",{parentName:"p",href:"http://bmp.lightbody.net/"},"download a copy of BrowserMob Proxy"),". Once we have that, we'll want to include our requisite libraries:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"selenium-webdriver")," to control the browser"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"browsermob/proxy")," to configure/user BrowserMob Proxy"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rspec=expectations")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"RSpec::Matchers")," for assertions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"json")," to consume JSON data for the performance checks")),(0,a.kt)("p",null,"After that, we can create methods to configure the proxy server (",(0,a.kt)("inlineCode",{parentName:"p"},"configure_proxy"),"), set the browser profile to use the proxy server (",(0,a.kt)("inlineCode",{parentName:"p"},"browser_profile"),"), pull these together so the test will have a working browser that uses the proxy server (",(0,a.kt)("inlineCode",{parentName:"p"},"setup"),"), and tear things down after running the test (",(0,a.kt)("inlineCode",{parentName:"p"},"teardown"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"# filename: performance.rb\n\nrequire 'selenium-webdriver'\nrequire 'browsermob/proxy'\nrequire 'rspec-expectations'\ninclude RSpec::Matchers\nrequire 'json'\n\ndef configure_proxy\n  proxy_binary = BrowserMob::Proxy::Server.new('./browsermob-proxy/bin/browsermob-proxy')\n  proxy_binary.start\n  proxy_binary.create_proxy\nend\n\ndef browser_profile\n  browser_profile = Selenium::WebDriver::Firefox::Profile.new\n  browser_profile.proxy = @proxy.selenium_proxy\n  browser_profile\nend\n\ndef setup\n  @proxy = configure_proxy\n  @driver = Selenium::WebDriver.for :firefox, profile: browser_profile\nend\n\ndef teardown\n  @driver.quit\n  @proxy.close\nend\n")),(0,a.kt)("p",null,"Next we'll want to tell the proxy server to capture traffic and return a payload (a.k.a. a HTTP Archive, or HAR for short)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"def capture_traffic\n  @proxy.new_har\n  yield\n  @proxy.har\nend\n")),(0,a.kt)("p",null,"We then tie this all together with a ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," method. It will call ",(0,a.kt)("inlineCode",{parentName:"p"},"setup"),", execute test commands while capturing traffic (",(0,a.kt)("inlineCode",{parentName:"p"},"capture_traffic"),"), save the HAR to a uniquely named file (which is named with a time stamp), and tear everything down when it's done (",(0,a.kt)("inlineCode",{parentName:"p"},"teardown"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'def run\n  setup\n  har = capture_traffic { yield }\n  @har_file = "./selenium_#{Time.now.strftime("%m%d%y_%H%M%S")}.har"\n  har.save_to @har_file\n  teardown\nend\n')),(0,a.kt)("p",null,"Now we can put all of this to use by exercising a feature of our application with some Selenium commands."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"run do\n  @driver.get 'http://the-internet.herokuapp.com/dynamic_loading/2'\n  @driver.find_element(css: '#start button').click\n  Selenium::WebDriver::Wait.new(timeout: 8).until do\n    @driver.find_element(css: '#finish')\n  end\nend\n")),(0,a.kt)("p",null,"If we run this script (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"ruby performance.rb")," from the command-line) then we will see the browser load, complete some actions, and close. After which, a HAR file will appear in the working directory."),(0,a.kt)("p",null,"This outputted file is what we'll use to perform some simple benchmark checks."),(0,a.kt)("p",null,"Rather than identify specific benchmarks to check, let's run through a gamut of them by leveraging a pre-existing benchmarking tool like ",(0,a.kt)("a",{parentName:"p",href:"https://developer.yahoo.com/yslow/"},"YSlow"),". Fortunately, there is ",(0,a.kt)("a",{parentName:"p",href:"http://yslow.org/command-line-har/"},"a command-line YSlow tool")," that can consume a HAR file and provide us with useful output."),(0,a.kt)("p",null,"It's a Node.js app. So first we'll need to ",(0,a.kt)("a",{parentName:"p",href:"http://nodejs.org/"},"install Node.js"),", and then install the app (with ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install yslow -g"),")."),(0,a.kt)("p",null,"After that, we can run it from the command line like so:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"yslow --info basic --format plain example.har")),(0,a.kt)("p",null,"This will consume a HAR file and output some helpful information -- including an overall score."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"size: 476.8K (476888 bytes)\noverall score: A (99)\nurl: http://the-internet.herokuapp.com/dynamic_loading/2\n# of requests: 16\nruleset: ydefault\n")),(0,a.kt)("p",null,"This overall score is what we are interested in. To get at it, we'll need to change the format type from ",(0,a.kt)("inlineCode",{parentName:"p"},"plain")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"json"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"yslow --info basic --format json example.har")),(0,a.kt)("p",null,"This will return a Hash that we can then easily parse through to get the value we want (e.g., the overall score with a key of ",(0,a.kt)("inlineCode",{parentName:"p"},'"o"'),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'{"w":476887,"o":99,"u":"http%3A%2F%2Fthe-internet.herokuapp.com%2Fdynamic_loading%2F2","r":16,"i":"ydefault"}\n')),(0,a.kt)("p",null,"Now we can automate the YSlow command-line execution and perform an assertion by adding the following to the end of our script."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'performance_results = JSON.parse `yslow --info basic --format json #{@har_file}`\nperformance_grade = performance_results["o"]\nperformance_grade.should be > 95\n')),(0,a.kt)("p",null,"Now when we run this if the overall score drops below a 95 out of 100 then the test will fail."),(0,a.kt)("p",null,"From here we can wire this up to a Continuous Integration server and run it headlessly (either with Xvfb or GhostDriver) to perform these checks in an ongoing basis."),(0,a.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Load the browser"),(0,a.kt)("li",{parentName:"ul"},"Capture all requests through the proxy server"),(0,a.kt)("li",{parentName:"ul"},"Save the captured requests to a HTTP Archive (HAR) file on disk"),(0,a.kt)("li",{parentName:"ul"},"Run the HAR file through YSlow to get a numeric grade"),(0,a.kt)("li",{parentName:"ul"},"Assert that the grade is above a certain level")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"You can see the full code example ",(0,a.kt)("a",{parentName:"p",href:"https://gist.github.com/tourdedave/bc4b75fd6cdc1eef7860"},"here"),"."),(0,a.kt)("p",null,"For more insights into what HAR is and the many uses of it, check out ",(0,a.kt)("a",{parentName:"p",href:"http://www.igvita.com/2012/08/28/web-performance-power-tool-http-archive-har/"},"this write-up and video from Ilya Grigorik's blog"),". You can also ",(0,a.kt)("a",{parentName:"p",href:"http://www.softwareishard.com/blog/har-12-spec/"},"check out the HAR spec"),". And there's also ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=qQgDDAan4rM"},"a great presentation from David Burns and David Henderson at GTAC 2009")," on using Selenium to do performance benchmarking."),(0,a.kt)("p",null,"Happy Testing!"),(0,a.kt)("h2",{id:"about-the-author"},"About The Author"),(0,a.kt)("p",null,"Dave Haeffner is the original writer of Elemental Selenium -- a free, once weekly Selenium tip newsletter that's read by thousands of testing professionals. He also created and maintains the-internet (an open-source web app that's perfect for writing automated tests against)."),(0,a.kt)("p",null,"Dave has helped numerous companies successfully implement automated acceptance testing; including The Motley Fool, ManTech International, Sittercity, and Animoto. He is also an active member of the Selenium project and has spoken at numerous conferences and meetups around the world about automated acceptance testing."))}m.isMDXComponent=!0}}]);