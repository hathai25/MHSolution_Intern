import './App.css';
import PracticeContext from './components/PracticeContext';
import Time from './components/Time/Time'
import Header from './components/Header/Header';
import TestErrorBoundary from './components/ErrorBoundary';
import PracticeRef from './components/PracticeRef';
import PracticeForwardingRefs from './components/PracticeForwardingRefs';
import PracticeFragments from './components/PracticeFragments';
import PracticeHOCs from './components/PracticeHOCs';
import UncontrolledComponents from './components/UncontrolledComponents';
import MouseTracker from './components/PracticeRenderProps';
import Feed from './components/Feed';


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
      <UncontrolledComponents/>
      <MouseTracker/>
      <Feed/>
    </div>
  );
}

export default App;
