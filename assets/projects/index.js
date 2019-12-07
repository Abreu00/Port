/*function importAll(r) {
  r.keys().map(r);
  const filePaths = r.keys().map(r);
  const images = {};
  filePaths.forEach(path => {
    const fileName = path.split("/")[3].split(".")[0];
    images[fileName] = path;
  });
  return images;
}

const images = importAll(
  require.context("../images", false, /\.(png|jpe?g|svg)$/)
);
*/
/*
  type 1 for web
  type 2 for mobile
*/

const projects = [
  {
    img: "/images/viewer.png",
    type: 1,
    ctas: [{ text: "View on github", link: "https://github.com/Abreu00" }]
  },
  {
    img: "/images/port.png",
    type: 1,
    ctas: [{ text: "View on github", link: "https://github.com/Abreu00" }]
  },
  {
    img: "/images/helpchain.png",
    type: 1,
    ctas: [{ text: "View on github", link: "https://github.com/Abreu00" }]
  },
  {
    img: "/images/app1.png",
    type: 2,
    ctas: [{ text: "View on github", link: "https://github.com/Abreu00" }]
  }
];

export default projects;
