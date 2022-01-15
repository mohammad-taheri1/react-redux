import SplitScreen from './01-Layout Components/SplitScreen';

const LeftHandComponent = () => {
    return <h1 style={{backgroundColor: 'green'}}> Left !</h1>;
}

const RightHandComponent = () => {
    return <h1 style={{backgroundColor: 'red'}}>Right !</h1>;
}

const App = () => {
    return (
        <SplitScreen
            left={LeftHandComponent}
            right={RightHandComponent}
        />
        );
};

export default App;