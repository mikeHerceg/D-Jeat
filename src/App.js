import './App.css';
import GenerateOption from './components/generate-option';
import FindOption from './components/find-food-option'

function App() {
  
  const generatedOption = null
  return (
    <div className="App">
      <header className="App-header">
        <h1>D'Jeat</h1>
        <GenerateOption></GenerateOption>
        <FindOption foodSuggestion={generatedOption}></FindOption>
      </header>
      
    </div>
  );
}

export default App;
