import React from "react";
import { Dropdown } from "semantic-ui-react";
import { useSelector} from "react-redux/es/exports";

const DropdownExampleSelection = ({ ...props }) => {
  const friendOptions = useSelector((state) => state.usersDropdownReducer);
  return (
    <Dropdown
      placeholder="Select users"
      fluid
      selection
      options={friendOptions}
      {...props}
    />
  );
};
export default DropdownExampleSelection;
