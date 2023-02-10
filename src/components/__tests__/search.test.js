import "@testing-library/jest-dom"
import { fireEvent, render, waitFor } from "@testing-library/react"
import Body from "../../components/Body"
import { Provider } from "react-redux"
import store from "../../utils/store"
import { StaticRouter } from "react-router-dom/server"
import {RESTAURANT_DATA} from "../../mocks/data"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(RESTAURANT_DATA)
        },
    });
});

test("Check Shimmer working fine", ()=>{
    const body=render(
        <StaticRouter>
            <Provider store ={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    )

    const shimmerData = body.getByTestId("shimmer-ui")
    // expect(shimmerData).toBeInTheDocument();
    expect(shimmerData.children.length).toBe(10);
 
})

test("Check Restorent Listing working fine", async ()=>{
    const body=render(
        <StaticRouter>
            <Provider store ={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    )

    await waitFor(() => expect(body.getByTestId("search-btn")));
    const resList = body.getByTestId("res-list");
    expect(resList.children.length).toBe(15);
  
 
})


test("Checking Search results on clicking search button for food", async ()=>{
    const body= render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    )

    
    await waitFor(() => expect(body.getByTestId("search-btn")));
    const searchInput= body.getByTestId("search-input");

     fireEvent.change(searchInput, {
        target:{
            value: "food"
        }
        }
     )
     const searchbtn = body.getByTestId("search-btn")
     fireEvent.click(searchbtn)
    const resList = body.getByTestId("res-list");
    expect(resList.children.length).toBe(4);
})