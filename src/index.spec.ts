import { JSDOM } from "jsdom";  // eslint-disable-line import/no-extraneous-dependencies
import main from ".";

test("adds text to h2 tag", () => {
  const dom = new JSDOM();
  const { document } = dom.window;

  document.body.innerHTML = "<div><h2 /></div>";

  main(document);
  expect(document.body.innerHTML).toMatchSnapshot();
});
