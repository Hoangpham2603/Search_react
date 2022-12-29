import Searchbar from "./components/SearchBar";
import SearchImages from "./api";
import ImageList from "./components/ImageList";
import { useState } from "react";
function App() {

  const [images, setImage] = useState([])

  const handleSubmit = async (term) => { 
    const result = await SearchImages(term);
    setImage(result);
    
  }

  return (
    <div className="App container">
      <Searchbar onSubmit={handleSubmit}/>
      <ImageList images ={images} />
    </div>
  );
}

export default App;
