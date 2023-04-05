// ORIGINAL
// import { Then } from "@cucumber/cucumber";
// import assert from "assert";

// Then(/^links related to "(.*)" are shown on the results page$/, keyword => {
//   const links = $$(".LC20lb");
//   links.forEach(link => {
//     const linkText = link.getText().toLowerCase();

//     if (linkText) {
//       assert(
//         linkText.includes(keyword),
//         `Link text does not include ${keyword}`
//       );
//     }
//   });
// });

// NEW - uses Support Files
import { Then } from "@cucumber/cucumber";
import verifyLinksContain from "../../support/assertions/verifyLinksContain";

Then(/^links related to "(.*)" are shown on the results page$/, keyword => {
  const links = $$(".LC20lb");
  verifyLinksContain(keyword);
}); 