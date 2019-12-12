import React from "react";
import { Like } from "../../../img/ImgComponents/Like";
import './important.css'

export const ItemContainer = ({ label, delItem, likesCount, likeItem, importantToggle, important
}) => {
  const likeToggle = likesCount ? <Like /> : null;
  const importantClass = important ? "important text-danger" : null

  return (
    <form className="input-group mb-3 mt-3 d-flex justify-content-between">
      <div className={`d-flex align-items-center flex-grow-1 justify-content-between`}>
        <div className={`px-3 text-dark d-flex`}>
          <span className={` ${importantClass}`}>{label}</span>
        </div>
        <span className="px-3">{likeToggle} </span>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={likeItem}
        >Like</button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={importantToggle}
        >!</button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={delItem}
        >Del</button>
      </div>
    </form>
  );
};
