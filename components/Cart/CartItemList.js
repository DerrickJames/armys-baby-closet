import { Header, Segment, Button, Icon, Item, Message } from 'semantic-ui-react';
import {  useRouter  } from 'next/router';

function CartItemList({ success, products = [], user, handleRemoveFromCart }) {
    const router = useRouter();

    function mapCartProductsToItems(products) {
        return products.map(el => ({
            childKey: el.product._id,
            header: (
                <Item.Header
                    as="a"
                    onClick={() => router.push(`/product?_id=${el.product._id}`)}>
                    {el.product.name}
                </Item.Header>
            ),
            image: el.product.mediaUrl,
            meta: `${el.quantity} x $${el.product.price}`,
            fluid: "true",
            extra: (
                <Button
                    basic
                    icon="remove"
                    floated="right"
                    onClick={() => handleRemoveFromCart(el.product._id)}/>
            )
        }))
    }

    if (success) {
        return (
            <Message
                success
                header="Success!"
                content="Your order and payment has been accepted."
                icon="star outline"/>
        );
    }

    if (products.length === 0) {
        return (
            <Segment
                secondary
                color="teal"
                inverted
                textAlign="center"
                placeholder>
                <Header icon>
                    <Icon name="shopping basket"/>
                    No products in your cart. Add some!
                </Header>
                <div>
                    {user ? (
                        <Button color="orange" onClick={() => router.push('/')}>
                            View Products
                        </Button>
                    ) : (
                        <Button color="blue" onClick={() => router.push('/login')}>
                            Login to Add Products
                        </Button>
                    )}
                </div>
            </Segment>
        );
    }

    return <Item.Group divided items={mapCartProductsToItems(products)}/>
}

export default CartItemList;
