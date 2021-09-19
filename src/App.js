import './App.css';
import AddConversationsComponent from './components/add-conversation';

// import AddConversationComponent from './components/add-conversation';
import ListConversationsComponent from './components/list-conversations';

function App() {
  return (
    <div className="App">
      <header>
        <h2>The Conversations of Alice and Bob</h2>
      </header>
      <div>
        <AddConversationsComponent/>
        <ListConversationsComponent />
      </div>
    </div>
  );
}

export default App;
