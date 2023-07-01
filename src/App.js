import { useState, useEffect  } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';
import Modal from './components/modal'


const App = () => {
  
  const [searchField, setSearchField] = useState(''); 
  const [Title, setTitle] = useState ('');
  const [monsters, setMonster] = useState([]);
  const [ filteredMonsters, setfilteredMonsters] = useState(monsters)



  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
     .then((response)=>  response.json())
     .then((users)=> setMonster(users)) 

  }, [])

  useEffect (() => {
    const newfilteredMonsters = monsters.filter((monster) => {
     return monster.name.toLocaleLowerCase().includes(searchField)

    });
    setfilteredMonsters(newfilteredMonsters);
  }, [monsters, searchField]);

  

  const onSearchChange= (event)=> {
       const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
        };
  
  const onTitleChange= (event)=> {
       const searchFieldString = event.target.value.toLocaleUpperCase();
       setTitle(searchFieldString);
       };

  return( 
    <div className="App">
        <h1 className='app-title'>{Title}</h1>
        <SearchBox 
        onChangeHandler= {onTitleChange}  
         placeholder= 'Search Title'
         className= 'title-search-box'/>
         
          <br />
        <SearchBox 
        onChangeHandler= {onSearchChange} 
         placeholder= 'Search Monsters'
         className= 'monsters-search-box'/>
        
        
         
          <br/>
         <CardList monsters= {filteredMonsters} />

          
          </div>
  )
}



export default App;
