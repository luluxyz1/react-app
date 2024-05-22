import Alert from "./components/Alert";

function App() {
  return (
    <div className="alert alert-danger">
      <Alert>
        Hello <span>World!</span>
      </Alert>
    </div>
  );
}

export default App;
