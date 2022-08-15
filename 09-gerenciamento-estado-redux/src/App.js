import './App.css';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
        <Card title="Card #01" red>
          X
        </Card>
        <Card title="Card #02" blue>
          Y
        </Card>
      </div>
      <div className="linha">
        <Card title="Card #03" green>
          Z
        </Card>
      
        <Card title="Card #04" purple>
          W
        </Card>
      </div>
    </div>
  );
}

export default App;
