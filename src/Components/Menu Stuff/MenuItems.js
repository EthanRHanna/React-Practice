import { Icon, Item, ItemContent, ItemGroup, Segment } from "semantic-ui-react";
import "../../CSS/MenuItems.css";

export function MenuItem({ itemName, price }) {
  return (
    <Segment color="red" inverted>
      <Item class="Item">
        <ItemContent verticalAlign="middle">
          <div class="Name">
            <b>{itemName}</b>
            <Icon circular name="plus" color="green" inverted />
          </div>
        </ItemContent>
      </Item>
      <Item class="Item">
        <ItemContent>
          <div class="Price">${price}</div>
        </ItemContent>
      </Item>
    </Segment>
  );
}
