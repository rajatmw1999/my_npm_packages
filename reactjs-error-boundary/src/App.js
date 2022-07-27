import './App.css';
import { ErrorBoundary } from './lib';
import MyComp from './mycomp'

function App() {
  return (
      <ErrorBoundary>
        <>
          <MyComp />
        </>
      </ErrorBoundary>
  );
}

export default App;
