import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { DropDown } from "../DropDown/DropDown";
import DropdownExampleSelection from "../DropDown/example";
import { ButtonAdd, DropDownBox, FormUser, Input } from "./StyleFormAddUser";

const FormAddUser = () => {
  const [valueDropdown, setValueDropdown] = useState();
  const [textPublication, setTextPublication] = useState();
  const [imagePublication, setImagePublication] = useState();
  const reducer = useDispatch();
  const userDropdown = useSelector((state) => state.usersDropdownReducer);

  function getValueDropdown(e) {
    setValueDropdown(e.target.innerText);
  }
  function getValueText(e) {
    setTextPublication(e.target.value);
  }
  function getValueImage(e) {
    setImagePublication(e.target.value);
  }

  function getAvatrUser(param) {
    let imageUser = "";
    userDropdown.forEach((item) => {
      if (item.key === param) {
        imageUser = item.image.src;
      }
    });
    return imageUser;
  }

  function addUser() {
    if (valueDropdown && textPublication && imagePublication) {
      setTextPublication("");
      setValueDropdown("");
      setImagePublication("");
      const user = {
        key: valueDropdown,
        firstName: valueDropdown,
        nickName:
          "@" + valueDropdown.split("").reverse().join("").toLowerCase(),
        avatar: getAvatrUser(valueDropdown),
        date: new Date().toLocaleDateString(),
        likes: 0,
        valueLike: false,
        repost: 0,
        valueRepost: false,
        comments: 0,
        valueComments: false,
        textPublication: textPublication,
        imagePublication: imagePublication,
      };
      reducer({ type: "ADD_USER", payload: user });
    } else {
      alert("Заповніть поля вводу");
    }
  }

  return (
    <FormUser>
      <DropDownBox>
        <DropDown>
          <DropdownExampleSelection
            onChange={getValueDropdown}
            value={valueDropdown}
          />
        </DropDown>
      </DropDownBox>
      <Input
        placeholder="Text publication"
        type="text"
        onChange={getValueText}
        value={textPublication}
      />
      <Input
        placeholder="Посилання на зображення :https://"
        onChange={getValueImage}
        value={imagePublication}
      />
      <ButtonAdd onClick={addUser}>ADD USSER</ButtonAdd>
    </FormUser>
  );
};

export default FormAddUser;
