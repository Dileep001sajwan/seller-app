import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import carData from "../car_data.json";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";

import "./Cardnew.css"; // Import your CSS file for styling

export default function Cardnew(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCars, setFilteredCars] = useState(carData.cars);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  // Function to handle the search input change
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();

    // Filter cars based on the search query
    const filtered = carData.cars.filter((car) =>
      car.make.toLowerCase().includes(query)
    );
    
    setSearchQuery(query);
    setFilteredCars(filtered);
  };

  // Calculate the index range for the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the cars to display for the current page
  const carsToDisplay = filteredCars.slice(startIndex, endIndex);

  // Function to handle page change
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <div className="container my-3 ">
      <div className="row">
        <div className="col-md-12">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Search by make..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        {carsToDisplay.map((car, index) => (
          <div className="col-md-4 mb-3 card-body1" key={index}  >
            <div className="image-container" style={{height:'300px',width:'400px'}}>
              <img
                src={car.image}
                className="card-img-top"
                alt={car.make}
              />
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">{`${car.make} ${car.model}`}</h5>
                <p className="card-text">Year: {car.year}</p>
              </div>
              <div className="container my-3">
                <div className="row">
                  <div className="col">
                    <p className="card-text">Passenger: {car.passengers}</p>
                  </div>
                  <div className="col">
                    <p className="card-text">Fuel: {car.fuel}</p>
                  </div>
                  <div className="w-100"></div>
                  <div className="col">
                    <p className="card-text">Average: {car.average}</p>
                  </div>
                  <div className="col">
                    <p className="card-text">Type: {car.type}</p>
                  </div>
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <h5 className="card-title">{car.price}</h5>
                <p className="card-text">
                  <a href="/" className="btn btn-primary btn-sm">
                    Rent Now
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ReactPaginate
        previousLabel={<ArrowLeft />} // Add an icon for the "Previous" button
        nextLabel={<ArrowRight />} // Add an icon for the "Next" button
        breakLabel={"..."}
        pageCount={Math.ceil(filteredCars.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        breakLinkClassName={"page-link"}
        pageLinkClassName={"page-link"}
      />
    </div>
  );
}
