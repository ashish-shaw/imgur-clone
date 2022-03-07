async function movie() {
  try {
    let res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=f5cbcb6`);
    let data = await res.json();
    console.log(data);
    show(data.results);
  } catch (e) {
    console.log(`Error:${e}`);
  }
}

movie();
var div1 = document.getElementById("product");
function show(data) {
  data.map(function (item) {
    var div = document.createElement("div");
    var figure = document.createElement("figure");

    var img = document.createElement("img");
    figure.append(img);
    img.src = item.Poster;
    var release = document.createElement("p");
    release.id = "rel";

    release.textContent = item.Released;
    console.log(item.Released);
    var prod_name = document.createElement("p");
    prod_name.id = "desc";
    prod_name.textContent = ` ${item.title || item.name}`;

    div.append(figure, prod_name, release);

    div1.append(div);
  });
}
