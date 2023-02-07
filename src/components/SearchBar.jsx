import Turnstone from "turnstone";
import { useState, useCallback, useRef } from "react";
import styles from "../Styles/Turnstone.module.scss";
import { useNavigate } from "react-router-dom";
import { fetchApi } from "../utilis/fetchApi";
import Item from "./Item";

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
  const onSelect = useCallback((item, displayField) => {
    console.log("onselect", item);
    if (item) {
      navigate(`book/${item?.book_id}`);
      ref.current?.clear();
    }
  }, []);
  //--OnSelect event---end//

  //--OnEnter event---start//
  const onEnter = useCallback((selectedResult) => {
    console.log("Enter Pressed. Selected Result:", selectedResult);

    if (selectedResult) {
      navigate(`book/${selectedResult.value?.book_id}`);
    }
  }, []);
  //--OnEnter event---end//

  //--OnChange event---start//
  const onChange = (query) => {
    setBookSearch(query);
  };
  //--OnEnter event--end//

  //--OnSearch event---start//
  const onSearch = () => {
    if (bookSearch) {
      navigate(`/search/${bookSearch}`);
    }
    ref.current?.clear();
  };
  //--OnSearch event---end//

  return (
    <>
      <Turnstone
        className="turnstone-class"
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
        placeholder="Search..."
        listbox={listbox}
        styles={styles}
        onChange={onChange}
        onEnter={onEnter}
        onSelect={onSelect}
      />
      <button
        style={{
          position: "relative",
          left: "9rem",
          height: "40px",
          fontSize: "1rem",
          borderRadius: "1rem",
        }}
        onClick={onSearch}
      >
        Search
      </button>
    </>
  );
}

export default SearchBar;
