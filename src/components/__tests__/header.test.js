import { render } from "@testing-library/react";
import Header from "../Header"
import { Provider } from "react-redux";
import  store  from '../../utils/store'
import {StaticRouter} from "react-router-dom/server"
import OnlineStatus from "../OnlineStatus";


test("Header logo test", ()=>{
 const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter> 
  )

  const logo= header.getAllByTestId("logo");
   expect(logo[0].src).toBe("https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/portal/c/logo_2022.png")

});

test("Cart value checking.. it should be zero", ()=>{
    const header = render(
           <StaticRouter>
               <Provider store={store}>
                   <Header/>
               </Provider>
           </StaticRouter> 
     )
   
     const cartdata= header.getByTestId("cart");
      expect(cartdata.innerHTML).toBe("0")
   
   });
   test("Check online status.. it should be true", ()=>{
    const header = render(
           <StaticRouter>
               <Provider store={store}>
                   {/* <Header/> */}
                   <OnlineStatus/>
               </Provider>
           </StaticRouter> 
     )
   
     const onlinestatus= header.getByTestId("connection");
      expect(onlinestatus.innerHTML).toBe("Online")
   
   });

