$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("amazon.feature");
formatter.feature({
  "line": 1,
  "name": "Dress Booking In Amazon",
  "description": "",
  "id": "dress-booking-in-amazon",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "user click the fashion button",
  "description": "",
  "id": "dress-booking-in-amazon;user-click-the-fashion-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user click the fashion button it navigate to next page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Defination.user_launch_the_application()"
});
formatter.result({
  "duration": 4985681900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defination.user_click_the_fashion_button_it_navigate_to_next_page()"
});
formatter.result({
  "duration": 4762857900,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "user click the saree",
  "description": "",
  "id": "dress-booking-in-amazon;user-click-the-saree",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "user move the curser  to women and click the saree button it will navigate to next page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Defination.user_move_the_curser_to_women_and_click_the_saree_button_it_will_navigate_to_next_page()"
});
formatter.result({
  "duration": 3486750500,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "user select checked saree",
  "description": "",
  "id": "dress-booking-in-amazon;user-select-checked-saree",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "user click the jute silk saree it will navigate to next page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Defination.user_click_the_jute_silk_saree_it_will_navigate_to_next_page()"
});
formatter.result({
  "duration": 624474300,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "user click Add To Cart",
  "description": "",
  "id": "dress-booking-in-amazon;user-click-add-to-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "user select wine color",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user to click the Add To Cart Button it will navigate to next page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Defination.user_select_wine_color()"
});
formatter.result({
  "duration": 12162906900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//div[@class\u003d\u0027twisterImageDiv twisterImageDivWrapper\u0027])[2]\"}\n  (Session info: chrome\u003d102.0.5005.115)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-KSLBA80I\u0027, ip: \u0027192.168.0.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 102.0.5005.115, chrome: {chromedriverVersion: 102.0.5005.61 (0e59bcc00cc4..., userDataDir: C:\\Users\\vijay\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64890}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9fab91ce9f61bf616c89f349450a4fa3\n*** Element info: {Using\u003dxpath, value\u003d(//div[@class\u003d\u0027twisterImageDiv twisterImageDivWrapper\u0027])[2]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat com.Amazon_baseclass.Base_Class.clickonElement(Base_Class.java:68)\r\n\tat com.amazon_stepdefinations.org.Step_Defination.user_select_wine_color(Step_Defination.java:47)\r\n\tat ✽.Given user select wine color(amazon.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Step_Defination.user_to_click_the_Add_To_Cart_Button_it_will_navigate_to_next_page()"
});
formatter.result({
  "status": "skipped"
});
});