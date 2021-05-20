import React from 'react';
import '../CakeComponent/Style/User/Cart.css';

function Cart() {
    return (
        <div className="cart">
            <div className="row cartRow">
                <div className="col-md-9 bodyCart">
                    <table className="fixed">
                        <tr>
                            <th width="20%">Image</th>
                            <th width="40%">Name</th>
                            <th width="10%">Price</th>
                            <th width="10%">Amount</th>
                            <th width="10%">Total</th>
                            <th width="10%">Delete</th>
                        </tr>
                        <tr>
                            <td width="20%">
                                <img className="imgCart" src="https://th.bing.com/th/id/Rf9d392d758a9039d082850eded33ec79?rik=seEtV8YA5vY9sA&pid=ImgRaw" alt="logo" />
                            </td>
                            <td width="40%">Name BirthDay Cake</td>
                            <td width="10%">$123</td>
                            <td width="10%"><input id="amount" type="number" className="cartAmount" min="0" max="10" /></td>
                            <td width="10%">$234</td>
                            <td width="10%" className="abc">
                                <button className="btnCartDelete">
                                    <i className="far fa-trash-alt" />
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td width="20%">
                                <img className="imgCart" src="https://th.bing.com/th/id/Rf9d392d758a9039d082850eded33ec79?rik=seEtV8YA5vY9sA&pid=ImgRaw" alt="logo" />
                            </td>
                            <td width="40%">Name BirthDay Cake</td>
                            <td width="10%">$123</td>
                            <td width="10%"><input id="amount" type="number" className="cartAmount" value="1" min="0" max="10" /></td>
                            <td width="10%">$234</td>
                            <td width="10%" className="abc">
                                <button className="btnCartDelete">
                                    <i className="far fa-trash-alt" />
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td width="20%">
                                <img className="imgCart" src="https://th.bing.com/th/id/Rf9d392d758a9039d082850eded33ec79?rik=seEtV8YA5vY9sA&pid=ImgRaw" alt="logo" />
                            </td>
                            <td width="40%">Name BirthDay Cake</td>
                            <td width="10%">$123</td>
                            <td width="10%"><input id="amount" type="number" className="cartAmount" min="0" max="10" /></td>
                            <td width="10%">$234</td>
                            <td width="10%" className="abc">
                                <button className="btnCartDelete">
                                    <i className="far fa-trash-alt" />
                                </button>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="col-md-3 totalCart">
                    <h4>Summary(3 items)</h4>
                    <div className="row summary">
                        <div className="col-md-6"><h6>Subtotal</h6></div>
                        <div className="col-md-6">$180</div>
                    </div>
                    <div className="row summary">
                        <div className="col-md-6"><h6>Shipping</h6></div>
                        <div className="col-md-6">$20</div>
                    </div>
                    <div className="row summary">
                        <div className="col-md-6"><h6>Taxes</h6></div>
                        <div className="col-md-6">$0</div>
                    </div>
                    <div className="row summary">
                        <div className="col-md-6"><h6>Coupon Code</h6></div>
                        <div className="col-md-6"><input type="text" className="cartAmount" /></div>
                    </div>
                    <div className="row summary">
                        <div className="col-md-6"><h4>Total</h4></div>
                        <div className="col-md-6"><h5 className="total">$1234</h5></div>
                    </div>
                </div>
            </div>
            <div className="btnCart">
                <button className="btnAddSub">Continue Shopping</button>
                <button className="btnAddSub">Continue to Payment</button>
            </div>

        </div>
    );
}

export default Cart;