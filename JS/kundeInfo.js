var kunder = [
  {
    nr: 1,
    fornavn: "Kåre",
    etternavn: "Olsen",
    epost: "epost@epost.com",
    img: "bilde.JPG",
    mobil: 12345678,
    comment: ["kult"]
  },
  {
    nr: 2,
    fornavn: "Trude",
    etternavn: "Hansen",
    epost: "epost@epost.no",
    img: "bilde.JPG",
    mobil: 23456789,
    comment: ["er"]
  },
  {
    nr: 3,
    fornavn: "Alex",
    etternavn: "Nordmark",
    epost: "epost@epost.org",
    img: "bilde.JPG",
    mobil: 34567890,
    comment: ["as"]
  }
];

var selected = "";

var app = new Vue({
  el: '#app',
  data: {
    kunder,
    selected
  }
}
);
