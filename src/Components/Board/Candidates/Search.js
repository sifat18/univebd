import React from "react";
import algoliasearch from "algoliasearch";
import { Table, Row, Col } from 'react-bootstrap';

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
                <Row>
                  <Col xs={5}>
                <p><img src={hit.basics.image} alt="" className="img-fluid" width='100' height='100'/></p>
                <p className="">Name: {hit.basics.name}</p>
               <p>Email: {hit.basics.email}</p>
               <p className="">Relevant Experience: {hit.basics.relExp}</p>
               <p className="">Experience: {hit.basics.totalExp}</p> </Col>
               <Col xs={6} className=''>
               <p>Role: {hit.basics.label}</p>
                              <p className="">Previous Employers : {hit.work.map(id=>(
                  <ul>
                  <li> {id.name} : {id.position}</li>
                
                </ul>
                ))
                }
                </p>
                <p className="">Education : {hit.education.map(id=>(
                  <ul>
                  <li> {id.institution} : {id.studyType}-{id.area}-{id.score}</li>
                
                </ul>
                ))
                }
                </p>
               </Col>
               </Row>
              </td>
              <td> 
                <p>General Skills: {hit.skills.general_skills.map(id=>(
                  
                  <span> {id.name} </span>
                ))
                }

                </p>
                <p>Softwares Skills: {hit.skills.softwares.map(id=>(
                  
                  <span> {id.name} </span>
                ))
                }
                </p>
                <p>Technical Skills: {hit.skills.technical_skills.map(id=>(
                  
                  <span> {id.name} </span>
                ))
                }
                </p>
                <p>Tools: {hit.skills.tools.map(id=>(
                  
                  <span> {id.name} </span>
                ))
                }
                </p>
                </td>
              
          </tr>
    
  </tbody>
</Table>
);
const Content = () => (
  <main>
    <div className="">
      <div className="stats">
        {" "}
        {/* <Stats />{" "} */}
      </div>
      {/* <div className="">
        <SortBy defaultRefinement="profile" items={[{ value: "Most" }]} />
      </div> */}
    </div>
    <Hits hitComponent={Hit} />
    <div>
      {" "}
      <Pagination />
    </div>
  </main>
);
export default Search;
