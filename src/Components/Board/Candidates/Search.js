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
      <div className="">
        <Content />
      </div>
    </InstantSearch>
  );
}
const Header = () => (
  <header className="header">
    <SearchBox
      className=""
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
          <th className="text-center">Basic Information</th>
          <th className="text-center">Skill Information</th>
      </tr>
  </thead>
  <tbody>
          <tr>
              <td>
                <Row>
                  <Col xs={5}>
                <p><img src={hit.basics.image} alt="" className="img-fluid" width='100' height='100'/></p>
                <p className=""><span className='fw-bold'>Name:</span> {hit.basics.name}</p>
               <p><span className='fw-bold'>Email:</span> {hit.basics.email}</p>
               <p className=""><span className='fw-bold'>Relevant Experience:</span> {hit.basics.relExp}</p>
               <p className=""><span className='fw-bold'>Experience:</span> {hit.basics.totalExp}</p> </Col>
               <Col xs={6} className=''>
               <p><span className='fw-bold'>Role:</span> {hit.basics.label}</p>
               <p className=""><span className='fw-bold'>Previous Employers :</span> {hit.work.map(id=>(
                  <ul>
                  <li className="circle"> {id.name} : {id.position}</li>
                
                </ul>
                ))
                }
                </p>
                <p className=""><span className='fw-bold'>Education:</span> {hit.education.map(id=>(
                  <ul>
                  <li className="circle"> {id.institution} : {id.studyType}-{id.area}-{id.score}</li>
                
                </ul>
                ))
                }
                </p>
               </Col>
               </Row>
              </td>
              <td> 
                <p><span className='fw-bold'>General Skills:</span> {hit.skills.general_skills.map(id=>(
                  
                  <span> {id.name} </span>
                ))
                }

                </p>
                <p><span className='fw-bold'>Softwares Skills:</span> {hit.skills.softwares.map(id=>(
                  
                  <span> {id.name} </span>
                ))
                }
                </p>
                <p><span className='fw-bold'>Technical Skills:</span> {hit.skills.technical_skills.map(id=>(
                  
                  <span> {id.name} </span>
                ))
                }
                </p>
                <p><span className='fw-bold'>Tools:</span> {hit.skills.tools.map(id=>(
                  
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
        <Stats />{" "}
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
