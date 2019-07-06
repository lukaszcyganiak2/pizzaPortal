$(function() {
  let order = {
    imie: "",
    nazwisko: "",
    ulica: "",
    nrDom: "",
    kodPocztowy: "",
    miasto: "",
    sos: [],
    pizza: ""
  };

  const pizza = [
    {
      id: 0,
      name: "wybierz",
      price: 0
    },
    {
      id: 1,
      name: "Pizza Wegańska",
      price: 25
    },
    {
      id: 2,
      name: "Pizza Hawajska",
      price: 50
    },
    {
      id: 3,
      name: "Pizza Calzone",
      price: 18
    },
    {
      id: 4,
      name: "Pizza Capriciosa",
      price: 52
    }
  ];

  let error = [];
  // ---- start funkcja pokazująca formularz zamwienia ------
  $("#showOrder").click(function() {
    $(".order").css({
      display: "block"
    });
  });
  // ---- end funkcja pokazująca formularz zamwienia ------

  // ----- start pobieranie danych z formularza -----
  $("#send").click(function() {
    if (checkValue($("#imie").val())) {
      order.imie = $("#imie").val();
    } else {
      error.push("Nie podałes imienia");
    }
    if (checkValue($("#nazwisko").val())) {
      order.nazwisko = $("#nazwisko").val();
    } else {
      error.push("Nie podałes nazwiska");
    }
    if (checkValue($("#ulica").val())) {
      order.ulica = $("#ulica").val();
    } else {
      error.push("Nie podałes ulicy");
    }
    if (checkValue($("#kodPocz").val())) {
      order.kodPocztowy = $("#kodPocz").val();
    } else {
      error.push("Nie podałes kodu");
    }
    if (checkValue($("#miasto").val())) {
      order.miasto = $("#miasto").val();
    } else {
      error.push("Nie podałes miasta");
    }
    if (checkValue($("#nrDomu").val())) {
      order.nrDom = $("#nrDomu").val();
    } else {
      error.push("Nie podałes nr domu");
    }
    if ($("#czosnkowy").is(":checked")) {
      order.sos.push($("#czosnkowy").val());
    }

    if ($("#pomidorowy").is(":checked")) {
      order.sos.push($("#pomidorowy").val());
    }
    if (order.sos.length === 0) {
      alert("Nie wybrałe sosow");
    }
    $("mainSelect");

    // console.log($('#czosnkowy').is(':checked'))
    console.log(order);
    console.log(error);
    order.imie = "";

    error = [];
  });

  // ----- end pobieranie danych z formularza -----

  // -----------start select pizza -------------

  $("#mainSelect").change(function() {
    let pizzaSelect = $(this).val();
    const pricePizza = $("#pricePizza");
    console.log(pizzaSelect);
    if (pizzaSelect == 0) {
      pricePizza.text("Cena za Placka : 0 zł ");
      return;
    }
    pizza.forEach(function(element) {
      console.log(element.id);
      if (element.id == pizzaSelect) {
        pricePizza.text("Cena za Placka :" + element.price);
        order.pizza = element.name;
      }
    });
  });

  // -----------end select pizza -------------

  // --------- start funkcja sprawdzająca zawartoci pola

  function checkValue(val) {
    if (val) {
      return true;
    }
  }

  // --------- end  funkcja sprawdzająca zawartoci pola
});
