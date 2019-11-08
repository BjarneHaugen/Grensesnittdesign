var kunde1 = {
  fornavn: "Kåre",
  etternavn: "Olsen",
  nr: 1,
  alder: 18,
  addresse: "torshov, oslo"
};

var kunde2 = {
  fornavn: "Trude",
  etternavn: "Olsen",
  nr: 2,
  alder: 28,
  addresse: "Strømsø, Drammen"
};

var kunde3 = {
  fornavn: "Alex",
  etternavn: "Olsen",
  nr: 3,
  alder: 23,
  addresse: "Bislett, oslo"
};

var app = new Vue({
  el: '#app',
  data: {
    kunder: [
      { kunde: kunde1.fornavn + " " + kunde1.etternavn + ", kundenummer: " + kunde1.nr },
      { kunde: kunde2.fornavn + " " + kunde1.etternavn + ", kundenummer: " + kunde2.nr },
      { kunde: kunde3.fornavn + " " + kunde1.etternavn + ", kundenummer: " + kunde3.nr }
    ]
  }
}
);

var app = new Vue({
  el: '#app2',
  data: {
    kunder: [
      { kunde: kunde1.fornavn + " " + kunde1.etternavn + ", kundenummer: " + kunde1.nr },
    ]
  }
}
);
