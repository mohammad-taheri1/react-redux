import SplitScreen from './01-Layout Components/SplitScreen';

const LeftHandComponent = ({name}) => {
    return <h1 style={{backgroundColor: 'green'}}> {name} !</h1>;
}

const RightHandComponent = ({message}) => {
    return <h1 style={{backgroundColor: 'red'}}>{message} !</h1>;
}

const App = () => {
    return (
        <SplitScreen leftWeight={1} rightWeight={3}>
            <LeftHandComponent name="mamad" />
            <RightHandComponent message="salam" />
        </SplitScreen>
        );
};

export default App;