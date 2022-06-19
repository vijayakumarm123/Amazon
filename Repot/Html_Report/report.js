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
  "duration": 3191603800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defination.user_click_the_fashion_button_it_navigate_to_next_page()"
});
formatter.result({
  "duration": 7712863900,
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
  "duration": 5775283100,
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
  "duration": 8088612400,
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
  "keyword": "Then "
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
  "duration": 793892100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defination.user_to_click_the_Add_To_Cart_Button_it_will_navigate_to_next_page()"
});
formatter.result({
  "duration": 1643104200,
  "status": "passed"
});
});