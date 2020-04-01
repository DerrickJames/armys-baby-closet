import { Item, Label } from 'semantic-ui-react';
import AddProductToCart from '../Product/AddProductToCart';

function ProductSummary({ _id, name, price, mediaUrl, sku, user }) {
    return (
        <Item.Group>
            <Item>
                <Item.Image size="medium" src={mediaUrl}/>
                <Item.Content>
                    <Item.Header>{name}</Item.Header>
                    <Item.Description>
                        <p>${price}</p>
                        <Label>SKU: {sku}</Label>
                    </Item.Description>
                    <Item.Extra>
                        <AddProductToCart productId={_id} user={user}/>
                    </Item.Extra>
                </Item.Content>
            </Item>
        </Item.Group>
    );
}

export default ProductSummary;
