var products = [
  {
    id: 100,
    name: "iPhone 4S",
    brand: "Apple",
    os: "iOS",
  },
  {
    id: 101,
    name: "Moto X",
    brand: "Motorola",
    os: "Android",
  },
  {
    id: 102,
    name: "iPhone 6",
    brand: "Apple",
    os: "iOS",
  },
  {
    id: 103,
    name: "Samsung Galaxy S",
    brand: "Samsung",
    os: "Android",
  },
  {
    id: 104,
    name: "Google Nexus",
    brand: "ASUS",
    os: "Android",
  },
  {
    id: 105,
    name: "Surface",
    brand: "Microsoft",
    os: "Windows",
  },
];
let arr = [];
for (let i = 0; i < products.length; i++) {
  arr[i] = products[i];
  display();
}
function display() {
  var table =
    "<table border=1px ><tr><th>ID</th><th>NAME</th><th>BRAND</th><th>OS</th> <th>REMOVE</th> </tr>";
  arr.forEach((element) => {
    table +=
      "<tr><td>" +
      element.id +
      "</td><td>" +
      element.name +
      "</td><td>" +
      element.brand +
      "</td><td>" +
      element.os +
      "</td><td>" +
      "<p onclick=\"remove('" +
      element.id +
      "')\" >X</p>";
    ("</td></tr>");
  });

  table += "</table>";
  document.getElementById("p1").innerHTML = table;
}
function remove(val) {
  for (let i = 0; i < arr.length; i++) {
    if (val == arr[i].id) {
      arr.splice(i, 1);
    }
  }
  display();
}
$(document).ready(function () {
  $("#fillerr").click(function () {
    var table =
          "<table border=1px ><tr><th>ID</th><th>NAME</th><th>BRAND</th><th>OS</th> <th>REMOVE</th></tr>"
        var OS = document.getElementById("OS").value;
        var Brand = document.getElementById("Brand").value;
    console.log(OS);
    console.log(Brand);
    products.forEach((element) => {
      if (element.os == OS) {
     
          table +=
            "<tr><td>" +
            element.id +
            "</td><td>" +
            element.name +
            "</td><td>" +
            element.brand +
            "</td><td>" +
            element.os +
            "</td><td>" +
            "<p onclick=\"remove('" +
            element.id +
            "')\" >X</p>";
          "</td></tr>";        
      }

        table += "</table>";
        document.getElementById("p1").innerHTML=table;
    });
  });
});

$("#searchEngine").click(function () {
  let table =
    "<table border=1px><tr><th>ID</th><th>Name</th><th>Brand</th><th>Operating System</th></tr>";
  var tval = document.getElementById("search").value;
  tval = tval.toLowerCase();
  products.forEach((element) => {
    if (element.name.toLowerCase() == tval) {
      table +=
        "<tr><td>" +
        element.id +
        "</td><td>" +
        element.name +
        "</td><td>" +
        element.brand +
        "</td><td>" +
        element.os +
        "</td><td>" +
        "<p onclick=\"delProd('" +
        element.id +
        "')\">X</p>" +
        "</td><tr>";
    } else if (element.id == tval) {
      table +=
        "<tr><td>" +
        element.id +
        "</td><td>" +
        element.name +
        "</td><td>" +
        element.brand +
        "</td><td>" +
        element.os +
        "</td><tr>";
    }
  });

  table += "</table>";
  document.getElementById("res").innerHTML = table;
});

