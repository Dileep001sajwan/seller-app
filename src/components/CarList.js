import React from "react";
import carData from "../car_data.json";
export default function CarList(props) {
  const { cars } = carData;
  // Helper function to group cars into rows of 3
  const groupCarsIntoRows = (cars) => {
    const rows = [];
    for (let i = 0; i < cars.length; i += 3) {
      const row = cars.slice(i, i + 3);
      rows.push(row);
    }
    return rows;
  };
  return (
    <>
      <div
        className="parent"
        style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
      >
        {groupCarsIntoRows(cars).map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="card">
                  <img src={item.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.make}</h5>
                    <p className="card-text">{item.year}</p>
                  </div>
                  <ul className="list-group list-group-flex">
                    <li className="list-group-item">{item.color}</li>
                    <li className="list-group-item">{item.model}</li>
                    <li className="list-group-item">{item.price}</li>
                  </ul>
                  <div className="card-body">
                    <a href="/" className="card-link">
                      Rent Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <nav aria-label="Page navigation example" style={{marginLeft: '1200px'}}>
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
