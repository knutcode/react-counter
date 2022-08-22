import Wrapper from "./styled-components/Wrapper";
import Title from "./styled-components/Title";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Title>Counter</Title>
        <Counter />
      </Wrapper>
    </div>
  );
}

export default App;
