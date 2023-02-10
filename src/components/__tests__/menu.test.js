import "@testing-library/jest-dom"
import { fireEvent, render, waitFor } from "@testing-library/react"
import { Provider } from "react-redux"
import { StaticRouter } from "react-router-dom/server"
import store from "../../utils/store"
import RestorentMenu from "../RestorentMenu"
import Header from "../Header"
import { MENU_DATA } from "../../mocks/data"

global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(MENU_DATA);
      },
    });
  });

test("Adding two items menu to cart", async ()=>{
   const restomenu = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
                <RestorentMenu />
            </Provider>
        </StaticRouter>
    );
    await waitFor(() => expect(restomenu.getByTestId("menuList")));

    const item = restomenu.getAllByTestId("addItem")

    fireEvent.click(item[0]);
    fireEvent.click(item[1]);

    const cartdata= restomenu.getByTestId("cart");
    expect(cartdata.innerHTML).toBe("2")
    
})