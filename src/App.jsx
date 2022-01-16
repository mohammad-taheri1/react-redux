import LargePersonListItem from "./01-Layout Components/people/LargePersonListItem";
import SmallPersonListItem from "./01-Layout Components/people/SmallPersonListItem";
import RegularList from "./01-Layout Components/RegularList";
import { people } from "./data/people";

const LeftHandComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: "green" }}> {name} !</h1>;
};

const RightHandComponent = ({ message }) => {
  return <h1 style={{ backgroundColor: "red" }}>{message} !</h1>;
};

const App = () => {
  return (
    <>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <hr />
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />
    </>
  );
};

export default App;
