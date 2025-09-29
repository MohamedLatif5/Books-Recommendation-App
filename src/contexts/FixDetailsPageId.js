import { createContext } from "react";
import { useNavigate } from "react-router-dom";
export let FixDetailsPageId = createContext(null);

export const FixDetailsPageIdProvider = ({ children }) => {
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
    <FixDetailsPageId.Provider value={{ moveTo }}>
      {children}
    </FixDetailsPageId.Provider>
  );
};

export default FixDetailsPageIdProvider;
