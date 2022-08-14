import './SearchBox.css';



function SearchBox(props) {
    return (
    <div className="search-box">
       <input id="search-text" onChange ={props.updateSearchInput} className='' type ='text' placeholder='Search...'/>

       <a class="search" href="#">
            <i class="fas fa-search"></i>
        </a>
    </div>
  )
}

export default SearchBox;