import Turnstone from "turnstone";
import { useState, useCallback, useRef } from "react";
import styles from "./Turnstone.module.scss";
import "./searchBar.scss";
import { useNavigate } from "react-router-dom";
import { fetchApi } from "../../utilis/fetchApi";
import Item from "./Item/Item";

function SearchBar() {
  //React and react-router//
  const [bookSearch, setBookSearch] = useState("");
  const ref = useRef();
  const navigate = useNavigate();
  //React and react-router//

  ////////////////////// Turnstone functionality --->>

  const listbox = {
    displayField: "books",
    data: async (query) => {
      const data = await fetchApi(`search/${query}`);
      return data;
    },
    searchType: "startsWith",
  };

  //--OnSelect event---start//
  const onSelect = useCallback(
    (item, displayField) => {
      console.log("onselect", item);
      if (item) {
        navigate(`book/${item?.book_id}`);
        ref.current?.clear();
      }
    },
    [navigate]
  );
  //--OnSelect event---end//

  //--OnEnter event---start//
  const onEnter = useCallback(
    (selectedResult) => {
      console.log("Enter Pressed. Selected Result:", selectedResult);

      if (selectedResult) {
        return navigate(`book/${selectedResult.value?.book_id}`);
      }
    },

    [navigate]
  );
  //--OnEnter event---end//

  //--OnChange event---start//
  const onChange = (query) => {
    setBookSearch(query);
  };
  //--OnEnter event--end//

  //--OnSearch event---start//
  const onSearch = (e) => {
    e.preventDefault();
    if (bookSearch) {
      navigate(`/search/${bookSearch}`);
      return;
    }
    setBookSearch("");
  };
  //--OnSearch event---end//

  return (
    <>
      <div className="form-turnstone">
        <form onSubmit={onSearch}>
          <Turnstone
            id="search"
            ref={ref}
            name="search"
            Item={Item}
            autoFocus={true}
            typeahead={true}
            clearButton={true}
            debounceWait={250}
            listboxIsImmutable={true}
            maxItems={6}
            noItemsMessage="We couldn't find any book that matches your search"
            placeholder="Search books"
            listbox={listbox}
            styles={styles}
            onChange={onChange}
            onEnter={onEnter}
            onSelect={onSelect}
          />
        </form>
        <button className="search-btn" onClick={onSearch}>
          Search
        </button>
      </div>
    </>
  );
}

export default SearchBar;
