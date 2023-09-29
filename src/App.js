import "./App.css";
import BillPage from "./Components/BillPage";
const App = () => {
  return (
    <div className="container">
      <h1 data-testid="title">SPLITTER</h1>
      <div>
        <BillPage />
      </div>
    </div>
  );
};

export default App;
