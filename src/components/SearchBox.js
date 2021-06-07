import React from 'react';
import { BsSearch } from "react-icons/bs";

const SearchBox = (props) => {
    console.log("Seventh Line");
    return (
        <>
            <div className="col col-sm-4" >
                
                {/* <div className="bssearch">
                  <BsSearch />
                </div> */}
                <input
                    className="form-control"
                    value={props.value}
                    //onChange={(event) => props.setSearchValue(event.target.value)}
                    onChange={(event) => { document.querySelector('.form-control').value = event.target.value }}
                    placeholder="Type to Search..."
                ></input>
                <button className="bssearch" type="button" onClick={() => {
                    console.log(document.querySelector('.form-control').value)
                    props.setSearchValue(document.querySelector('.form-control').value)
                }}
                > <BsSearch /> </button>
            </div>

        </>
    );
};

export default SearchBox;