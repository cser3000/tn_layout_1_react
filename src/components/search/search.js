import './search.css';

function Search() {
    return (
        <form className="search" action="#">
            <label>
                <input placeholder="Поиск по всему..." type="search" className="searchInput"/>
            </label>
            <button type="submit" className="searchButton"/>
        </form>
    );
}

export default Search;