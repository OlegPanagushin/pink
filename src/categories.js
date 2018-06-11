export const categories = [
  {
    id: 0,
    color: "#cddcaa"
  },
  {
    id: 1,
    color: "#f9f1ea"
  },
  {
    id: 2,
    color: "#fbe4b7"
  },
  {
    id: 3,
    color: "#ffdbB9"
  },
  {
    id: 4,
    color: "#e2cab7"
  },
  {
    id: 5,
    color: "#86cccc"
  }
];

export const category = id => ({
  ...categories[id],
  title: "Category",
  descriptio:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit sapien sit amet congue laoreet. Sed eu maximus felis. Integer a dui id orci lacinia dignissim eget quis dolor. Vivamus a arcu est. Nam euismod augue ut odio facilisis, sed condimentum metus tincidunt. Cras suscipit leo ac nisl convallis rhoncus."
});
