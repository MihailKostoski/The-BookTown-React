import React from "react";
import "./sidebar.scss";
import { useState, useRef, useEffect } from "react";
import { categories } from "../../utilis/category";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { gsap } from "gsap";

function SideBar({ setCategory }) {
  //SetCategory prop coming from parent component -- <Main/>
  const [scrollX, setscrollX] = useState(0); // For detecting start scroll postion
  const [scrolEnd, setscrolEnd] = useState(false); // For detecting end of scrolling
  const scrl = useRef();
  //React///
  //const [searchTerm, setSearchTerm] = useState("");
  //React///

  ///// -> Sidebar search functionality
  /* const onChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setCategory(searchTerm);
    setSearchTerm("");
  };*/

  ///// <-end//

  useEffect(() => {
    //Check width of the scollings
    if (
      scrl.current &&
      scrl?.current?.scrollWidth === scrl?.current?.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
    return () => {};
  }, [scrl?.current?.scrollWidth, scrl?.current?.offsetWidth]);

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };
  const anim = (e) => {
    gsap.from(e.target, { scale: 1 });
    gsap.to(e.target, { scale: 1.5 });
  };
  const anim2 = (e) => {
    gsap.from(e.target, { scale: 1.5 });
    gsap.to(e.target, { scale: 1 });
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo">Category</div>

      {/*}  <form onSubmit={onSubmit}>
        <input
          style={{ width: "100%" }}
          type="text"
          placeholder="Search "
          value={searchTerm}
          onChange={onChange}
        />
  </form>*/}
      {scrollX !== 0 && (
        <button
          className="prev"
          onClick={() => slide(-50)}
          onMouseEnter={(e) => anim(e)}
          onMouseLeave={(e) => anim2(e)}
        >
          <AiOutlineArrowLeft />
        </button>
      )}
      <ul ref={scrl} onScroll={scrollCheck}>
        {categories.map((category) => (
          <li
            className="category-btn"
            key={category.name}
            onClick={() => setCategory(category.name)}
          >
            <span className="category-name">{category.name}</span>
          </li>
        ))}
      </ul>
      {!scrolEnd && (
        <button
          className="next"
          onClick={() => slide(+50)}
          onMouseEnter={(e) => anim(e)}
          onMouseLeave={(e) => anim2(e)}
        >
          <AiOutlineArrowRight />
        </button>
      )}
    </div>
  );
}

export default SideBar;
