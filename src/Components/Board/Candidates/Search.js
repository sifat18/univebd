import React from "react";
import algoliasearch from "algoliasearch";
import { Table } from 'react-bootstrap';

import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  Stats,
  SortBy,
  Pagination
} from "react-instantsearch-dom";

const searchClient = algoliasearch(
  "GOL61V6C9Y",
  "84297386717db9cb147b2f18e8db4dd7"
);

function Search() {
  return (
    <InstantSearch searchClient={searchClient} indexName="profile">
      <Header />
      <div className="body-content">
        <Content />
      </div>
    </InstantSearch>
  );
}
const Header = () => (
  <header className="header">
    <SearchBox
      className="search-bar"
      translations={{ placeholder: "Search for profile" }}
    />
  </header>
);
const Hit = ({ hit }) => (
  // <a href={"/"}>
  //   <div className="card">
  //     {hit.name}
  //     <div className="card-image">
  //       {hit.basics.email}
  //       {/* <img src={hit.image} alt={hit.name} className="image" /> */}
  //     </div>
  //     <div className="card-contents">
  //       {/* <Highlight attribute="title" hit={hit} className="card-title" /> */}
  //       {/* <Highlight attribute="year" hit={hit} className="card-year" /> */}
  //       {/* <div className="card-rating">Rating: {hit.rating}</div> */}
  //       <div className="card-genre">
  //         {hit.name}
  //         {/* <span>{hit.genre[0]}</span> <span>{hit.genre[1]}</span>{" "} */}
  //       </div>
  //     </div>
  //   </div>
  // </a>
  <Table striped bordered hover resonsive>
  <thead>
      <tr>
          <th>Basics</th>
          <th>skills</th>
      </tr>
  </thead>
  <tbody>
          <tr>
              <td>
              <Highlight attribute={hit.basics.name} hit={hit} className="card-title" />
                <p><img src={hit.basics.image} alt="" className="img-fluid" width='100' height='100'/></p>
               <p> {hit.basics.name}</p>
               <p> {hit.basics.email}</p>
              
              </td>
              <td>
                {hit.skills.general_skills.map(id=>(
                  
                  <p>{id.name}</p>
                ))
                }</td>
              
          </tr>
    
  </tbody>
</Table>
);
const Content = () => (
  <main>
    <div className="information">
      <div className="stats">
        {" "}
        <Stats />{" "}
      </div>
      <div className="">
        <SortBy defaultRefinement="profile" items={[{ value: "Most" }]} />
      </div>
    </div>
    <Hits hitComponent={Hit} />
    <div>
      {" "}
      <Pagination />
    </div>
  </main>
);
export default Search;
