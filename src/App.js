import Search from './components/Search/search';

import './App.css';

function App() {
  const handleSearchChange = (searchData) => {
    console.log(searchData)
  }

  return (
    <div className="container">
      <Search onSearchChange={handleSearchChange} />
    </div>
  );
}

export default App;
