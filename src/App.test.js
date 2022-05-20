import { cleanup, render } from "@testing-library/svelte";
import App from "../src/App.svelte";

describe("ShopChart", function () {
    it("it works", function () {
        expect(1).toEqual(1);
    })
})

afterEach(cleanup)
test("should render ui", () => {
    const { queryByText } = render(App, { props: {} })
    // console.log(queryByText())
    expect(queryByText('Hello World!')).toBeDefined()
})