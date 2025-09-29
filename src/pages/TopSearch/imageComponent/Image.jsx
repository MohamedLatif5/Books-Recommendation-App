import React from "react";
import { useNavigate } from "react-router-dom";
const Image = ({ id, image }) => {
  const navigate = useNavigate();
  const moveTo = (id) => {
    // Fix for ID issues when swiping quickly in carousel component - removes extra 'x' added by backend
    console.log(id);
    const num = +id;
    if (isNaN(num)) {
      const x = [...id];
      x.pop();
      const newId = x.join("");
      console.log(newId);

      navigate(`/details/${newId}/`);
    } else {
      navigate(`/details/${id}/`);
    }
  };
  return (
    <div onClick={() => moveTo(id)}>
      <img className="w-100" src={image} alt="book cover" />
    </div>
  );
};

export default Image;
