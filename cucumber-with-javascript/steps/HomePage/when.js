// ORIGINAL
// import { When } from "@cucumber/cucumber";

// When(/^The user enters "(.*)" into the search bar$/, keyword => {
//     $(".gLFyf.gsfi").waitForDisplayed(5000);
//     $(".gLFyf.gsfi").click();
//     $(".gLFyf.gsfi").setValue(keyword);
//     $(".aajZCb .gNO89b").waitForDisplayed(5000);
//     $(".aajZCb .gNO89b").click();
//   });

// NEW - uses Support Files
import { When } from "@cucumber/cucumber";
import googleSearch from "../../support/actions/search";

When(/^The user enters "(.*)" into the search bar$/, keyword => {
  // googleSearch(keyword, $(".gLFyf.gsfi"), $(".aajZCb .gNO89b"));
  googleSearch(keyword); // searchField & searchButton defined in pages/Home.js
}); 