// ORIGINAL
// import { Given } from "@cucumber/cucumber";

// Given("A web browser is at the Google home page", () => {
//   browser.url("/");
// });

// V2 - uses Support Files
// import { Given } from "@cucumber/cucumber";
// import goToURL from "../../support/actions/goToURL";

// Given("A web browser is at the Google home page", () => {
//   goToURL("/");
// }); 

// // V3 - uses Page Objects
import { Given } from "@cucumber/cucumber";
import homePage from "../../pages/Home";
import goToURL from "../../support/actions/goToURL";

Given("A web browser is at the Google home page", () => {
  goToURL(homePage.url);
});