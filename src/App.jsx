import NumberedList from "./01-Layout Components/NumberedList";
import LargePersonListItem from "./01-Layout Components/people/LargePersonListItem";
import SmallPersonListItem from "./01-Layout Components/people/SmallPersonListItem";
import LargeProductListItem from "./01-Layout Components/products/LargeProductListItem";
import SmallProductListItem from "./01-Layout Components/products/SmallProductListItem";
import RegularList from "./01-Layout Components/RegularList";
import { people } from "./data/people";
import { products } from "./data/products";

const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: "green" }}> {name} !</h1>;
};

const RightHandComponent = ({ message }) => {
  return <h1 style={{ backgroundColor: "red" }}>{message} !</h1>;
};

const App = () => {
  return (
    <>
      {/* <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      /> */}
      <hr />
      {/* <RegularList
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      /> */}
      <RegularList
        items={products}
        resourceName="product"
        itemComponent={SmallProductListItem}
      />
      <hr />
      <NumberedList
        items={products}
        resourceName="product"
        itemComponent={LargeProductListItem}
      />
    </>
  );
};

export default App;
