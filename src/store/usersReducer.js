const defaultState = [
  {
    key: "Edgar Po",
    firstName: "Edgar Po",
    nickName: "@Sad man",
    avatar: "http://pngimg.com/uploads/dwarf/small/dwarf_PNG80.png",
    date: new Date().toLocaleDateString(),
    textPublication:
      " “Що розум людини може осягнути і в що він може повірити, те він здатний досягти”, – Наполеон Хілл.",
    imagePublication:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLlCbULIV62cy5iLUUya1nD2HmCobRLufMTQ&usqp=CAU",
    likes: 568,
    valueLike: false,
    repost: 5,
    valueRepost: false,
    comments: 189,
    valueComments: false,
  },
  {
    key: "Ludovick V",
    firstName: "Ludovick V",
    nickName: "@Ging",
    avatar: "http://pngimg.com/uploads/dwarf/small/dwarf_PNG53.png",
    date: new Date().toLocaleDateString(),
    textPublication:
      "Є тільки один спосіб уникнути критики: нічого не робіть, нічого не говоріть і будьте ніким. “, – Аристотель.",
    imagePublication:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbQeh8imgmVc1ng5JvFu6ww5rsgGlPdhH80Q&usqp=CAU",
    likes: 50,
    valueLike: false,
    repost: 5,
    valueRepost: false,
    comments: 13,
    valueComments: false,
  },
];

const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.payload];
    case "ADD_LIKE":
      state[action.payload].likes += 1;
      state[action.payload].valueLike = true;
      return [...state];
    case "REMOVE_LIKE":
      state[action.payload].likes -= 1;
      state[action.payload].valueLike = false;
      return [...state];
    case "ADD_REPOST":
      state[action.payload].repost += 1;
      state[action.payload].valueRepost = true;
      return [...state];
    case "REMOVE_REPOST":
      state[action.payload].repost -= 1;
      state[action.payload].valueRepost = false;
      return [...state];
    case "ADD_COMMENT":
      state[action.payload].comments += 1;
      state[action.payload].valueComments = true;
      return [...state];
    case "REMOVE_COMMENT":
      state[action.payload].comments -= 1;
      state[action.payload].valueComments = false;
      return [...state];
    default:
      return state;
  }
};

export default usersReducer;
