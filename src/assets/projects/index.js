function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../images", false, /\.(png|jpe?g|svg)$/)
);

/*
  type 1 for web
  type 2 for mobile
*/

const projects = [
  {
    img: images[0],
    type: 1,
    ctas: [{ text: "View on github", link: "https://github.com/Abreu00" }]
  },
  {
    img: images[1],
    type: 1,
    ctas: [{ text: "View on github", link: "https://github.com/Abreu00" }]
  },
  {
    img: images[0],
    type: 1,
    ctas: [{ text: "View on github", link: "https://github.com/Abreu00" }]
  },
  {
    img: images[0],
    type: 2,
    ctas: [{ text: "View on github", link: "https://github.com/Abreu00" }]
  }
];

export default projects;
