import React from "react";

export const ItemDetailCreate = ({ label, rend, imgItem }) => {
  return (
    <React.Fragment>
      <h4>{label} Detail</h4>
      <div className="d-flex jumbotron">
        <div className="d-flex px-3">
          <img src={imgItem} alt={label} width="150" />
        </div>
        <ul className="list-group item-list flex-grow-1">
          {rend}
        </ul>
      </div>
    </React.Fragment>
  );
};
