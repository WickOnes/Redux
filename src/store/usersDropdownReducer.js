const defaultState = [
  {
    key: "Jenny Hess",
    text: "Jenny Hess",
    value: "Jenny Hess",
    image: {
      avatar: true,
      src: "http://pngimg.com/uploads/dwarf/small/dwarf_PNG51.png",
    },
  },
  {
    key: "Elliot Fu",
    text: "Elliot Fu",
    value: "Elliot Fu",
    image: {
      avatar: true,
      src: "http://pngimg.com/uploads/dwarf/small/dwarf_PNG45.png",
    },
  },
  {
    key: "Stevie Feliciano",
    text: "Stevie Feliciano",
    value: "Stevie Feliciano",
    image: {
      avatar: true,
      src: "http://pngimg.com/uploads/dwarf/small/dwarf_PNG40.png",
    },
  },
  {
    key: "Christian",
    text: "Christian",
    value: "Christian",
    image: {
      avatar: true,
      src: "http://pngimg.com/uploads/dwarf/small/dwarf_PNG1.png",
    },
  },
  {
    key: "Matt",
    text: "Matt",
    value: "Matt",
    image: {
      avatar: true,
      src: "http://pngimg.com/uploads/dwarf/small/dwarf_PNG36.png",
    },
  },
  {
    key: "Justen Kitsune",
    text: "Justen Kitsune",
    value: "Justen Kitsune",
    image: {
      avatar: true,
      src: "http://pngimg.com/uploads/dwarf/small/dwarf_PNG25.png",
    },
  },
];

const usersDropdownReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default usersDropdownReducer;
