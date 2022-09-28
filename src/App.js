import './App.css';
import PracticeContext from './components/PracticeContext';
import Time from './components/Time/Time'
import Header from './components/Header/Header';
import TestErrorBoundary from './components/ErrorBoundary';
import PracticeRef from './components/PracticeRef';
import PracticeForwardingRefs from './components/PracticeForwardingRefs';
import PracticeFragments from './components/PracticeFragments';
import PracticeHOCs from './components/PracticeHOCs';


function App() {
  return (
    <div className="App">
      <h1><strong>Hello World</strong></h1>
      <Time/>
      <Header title="1" />
      <PracticeContext/>
      <TestErrorBoundary/>
      <PracticeRef/>
      <PracticeForwardingRefs/>
      <PracticeFragments/>
      <PracticeHOCs/>
    </div>
  );
}

export default App;
