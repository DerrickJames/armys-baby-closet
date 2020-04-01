import React from 'react';
import { Button, Segment, Divider } from 'semantic-ui-react';
import calculateCartTotal from '../../utils/calculateCartTotal';
import StripeCheckout from 'react-stripe-checkout';

function CartSummary({ success, products, handleCheckout }) {
    const [isCartEmpty, setCartEmpty] = React.useState(false);
    const [cartAmount, setCartAmount] = React.useState(0);
    const [stripeAmount, setStripeAmount] = React.useState(0);

    React.useEffect(() => {
        const { cartTotal, stripeTotal } = calculateCartTotal(products);

        setCartAmount(cartTotal);
        setStripeAmount(stripeTotal);
        setCartEmpty(products.length === 0);
    }, [products]);

    return (
        <>
            <Divider/>
            <Segment clearing size="large">
                <strong>Sub total: </strong> ${cartAmount}
                <StripeCheckout
                    name="ArmysBabyCloset"
                    amount={stripeAmount}
                    image={products.length > 0 ? products[0].product.mediaUrl : ""}
                    currency="USD"
                    shippingAddress={true}
                    billingAddress={true}
                    zipCode={true}
                    token={handleCheckout}
                    triggerEvent="onClick"
                    stripeKey="pk_test_93If3v0RlZPtg9IDYjUhmLt000A4oO5vX6">
                    <Button
                        icon="cart"
                        color="teal"
                        floated="right"
                        disabled={isCartEmpty || success}
                        content="Checkout"/>
                </StripeCheckout>
            </Segment>
        </>
    );
}

export default CartSummary;
