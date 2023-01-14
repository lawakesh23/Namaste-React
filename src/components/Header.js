const Title = ()=>(
    <h1 className="title" id="main"> Namaste React</h1>
);

const Header =()=>{
   return(
      <div className="header">
          <Title/>
          <div className="nav-bar">
              <ul>
                  <li>Offers</li>
                  <li>Help</li>
                  <li>About Us</li>
                  <li>Contact</li>
                  <li>Cart</li>
              </ul>
          </div>
      </div>
   );
};

export default Header;