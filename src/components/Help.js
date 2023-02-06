const Help=()=>{
    return(
        <div className="Help-bg">
            <div className="container">    
                <div className="pb-4 pt-3">
                    <h1 className="text-white">Help & Support</h1>
                    <p className="text-white">Let's take a step ahead and help you better.</p>
                    <div id="accordion">
                        <div className="card">
                        <div className="card-header">
                            <a className="card-link" data-toggle="collapse" href="#collapseOne">
                            What is Swiggy Customer Care Number?
                            </a>
                        </div>
                        <div id="collapseOne" className="collapse show" data-parent="#accordion">
                            <div className="card-body">
                            We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. You can also email us your issue on support@swiggy.in
                            <p>Note: We value your privacy and your information is safe with us. Please do not reveal any personal information, bank account number, OTP etc. to another person. A Swiggy representative will never ask you for these details. Please do not reveal these details to fraudsters and imposters claiming to be calling on our behalf. Be vigilant and do not entertain phishing calls or emails. </p>
                            </div>
                        </div>
                        </div>
                        <div className="card">
                        <div className="card-header">
                            <a className="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                            Can I edit my order?
                        </a>
                        </div>
                        <div id="collapseTwo" className="collapse" data-parent="#accordion">
                            <div className="card-body">
                            Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents
                            </div>
                        </div>
                        </div>
                        <div className="card">
                        <div className="card-header">
                            <a className="collapsed card-link" data-toggle="collapse" href="#collapseThree">
                            I want to cancel my order
                            </a>
                        </div>
                        <div id="collapseThree" className="collapse" data-parent="#accordion">
                            <div className="card-body">
                            We will do our best to accommodate your request if the order is not placed to the restaurant (Customer service number:  080-67466729). Please note that we will have a right to charge a cancellation fee up to full order value to compensate our restaurant and delivery partners if your order has been confirmed.
                            </div>
                        </div>
                        </div>
                        <div className="card">
                        <div className="card-header">
                            <a className="collapsed card-link" data-toggle="collapse" href="#collapseFour">
                            Is there a minimum order value?
                            </a>
                        </div>
                        <div id="collapseFour" className="collapse" data-parent="#accordion">
                            <div className="card-body">
                            We have no minimum order value and you can order for any amount. 
                            </div>
                        </div>
                        </div>
                        </div>
                        <div className="card">
                        <div className="card-header">
                            <a className="collapsed card-link" data-toggle="collapse" href="#collapseFive">
                            Do you charge for delivery?
                            </a>
                        </div>
                        <div id="collapseFive" className="collapse" data-parent="#accordion">
                            <div className="card-body">
                            Delivery fee varies from city to city and is applicable if order value is below a certain amount. Additionally, certain restaurants might have fixed delivery fees. Delivery fee (if any) is specified on the 'Review Order' page. 
                            </div>
                        </div>
                        </div>
                        <div className="card">
                        <div className="card-header">
                            <a className="collapsed card-link" data-toggle="collapse" href="#collapseSix">
                            Can I order from any location?
                            </a>
                        </div>
                        <div id="collapseSix" className="collapse" data-parent="#accordion">
                            <div className="card-body">
                            We will deliver from any restaurant listed on the search results for your location. We recommend enabling your GPS location finder and letting the app auto-detect your location.
                            </div>
                        </div>
                        </div>
                        <div className="card">
                        <div className="card-header">
                            <a className="collapsed card-link" data-toggle="collapse" href="#collapseSeven">
                            Can I change the address / number?
                            </a>
                        </div>
                        <div id="collapseSeven" className="collapse" data-parent="#accordion">
                            <div className="card-body">
                            Any major change in delivery address is not possible after you have placed an order with us. However, slight modifications like changing the flat number, street name, landmark etc. are allowed. If you have received delivery executive details, you can directly call him, else you could contact our customer service team.
                            </div>
                        </div>
                        </div>
                        <div className="card">
                        <div className="card-header">
                            <a className="collapsed card-link" data-toggle="collapse" href="#collapseEight">
                            Do you accept Sodexo, Ticket Restaurant etc.?
                            </a>
                        </div>
                        <div id="collapseEight" className="collapse" data-parent="#accordion">
                            <div className="card-body">
                            We do not accept Sodexo vouchers but we do accept Sodexo card. You can select the Sodexo card option while selecting payment options at the time of order
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Help;