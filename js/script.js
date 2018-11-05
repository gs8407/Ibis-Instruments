function resetFilters() {
  $("#mac").val("");
  $("#customerID").val("");
  location.reload();
}

$(document).ready(function(){
  $(".nav > li > a").click(function(){
      if($(this).hasClass("disabled"))
          return false;
  });
  $('div.easy-autocomplete').removeAttr('style');
});

const options = {
  data: [
    { mac: "58-90-77-22-75-5C", customerID: "54867972" },
    { mac: "5A-3D-30-13-8F-15", customerID: "31495080" },
    { mac: "A3-43-AE-41-2E-D7", customerID: "31452503" },
    { mac: "B6-06-F6-C7-D5-04", customerID: "79238775" },
    { mac: "9D-01-4A-A4-CB-91", customerID: "39531833" },
    { mac: "D7-C4-71-4A-47-35", customerID: "33992438" },
    { mac: "0D-D3-6B-05-86-59", customerID: "93603004" }
  ],

  getValue: "customerID",

  list: {
    match: {
      enabled: true
    },
    onSelectItemEvent: function() {
      var value = $("#customerID").getSelectedItemData().mac;

      $("#mac")
        .val(value)
        .trigger("change");
    }
  }
};

$("#customerID").easyAutocomplete(options);

const information = [
  { mac: "58-90-77-22-75-5C", customerID: "54867972", city: "Budapest" },
  { mac: "5A-3D-30-13-8F-15", customerID: "31495080", city: "Belgrade" },
  { mac: "A3-43-AE-41-2E-D7", customerID: "31452503", city: "Helsinki" },
  { mac: "B6-06-F6-C7-D5-04", customerID: "79238775", city: "Kinshasa" },
  { mac: "9D-01-4A-A4-CB-91", customerID: "39531833", city: "Bangkok" },
  { mac: "D7-C4-71-4A-47-35", customerID: "33992438", city: "Santiago" },
  { mac: "0D-D3-6B-05-86-59", customerID: "93603004", city: "Los Angeles" }
];

$("#mac").keyup(function() {
  var macChar = $(this)
    .val()
    .split("-")
    .join(""); 
  if (macChar.length > 0) {
    macChar = macChar
      .match(new RegExp(".{1,2}", "g"))
      .join("-")
      .toUpperCase();
  }
  $(this).val(macChar);
});

$("#customerInfo").submit(function() {
  macAddress = $("#mac").val();
  customerId = $("#customerID").val();

  $("#info-display").css("display", "table");
  $(".nav > li > a").removeClass("disabled");
  var obj = $.grep(information, function(obj) {
    return obj.mac === macAddress;
  })[0];

  for (var i = 0, len = information.length; i < len; i++) {
    if (information[i]["mac"] == macAddress) {
      var macExists = true;
    }
  }

  regex = /^([0-9a-f]{2}([:-]|$)){6}$|([0-9a-f]{4}([.]|$)){3}$/i;

  if (regex.test(macAddress)) {
  } else {
    alert("Not a valid mac address");
    return false;
  }

  if (macAddress !== "" && macExists === true) {
    $(this).hide();
    customer = customerId;

    $("#graphsActivate").tab("show");
    var city = obj.city;
    hgwInfo();
    $(".info-wrapper").append(
      "<div class='header-wrapper'><div class='col-md-4'><div class='header-info'><p><span class='info'>Currently viewing data:</span></p><p>MAC address: " +
        '<span class="info">' +
        macAddress +
        "</span>" +
        "</p><p>Contact ID: " +
        '<span class="info">' +
        customerId +
        "</span>" +
        "</p><p>City: " +
        '<span class="info">' +
        city +
        "</span>" +
        "</p></div></div>" +
        "<div class='col-md-4'><div class='header-calendar'><button class='active' id='one-day'>1 Day</button><button id='seven-days'>7 Days</button><p><span class='prev'></span><input type='text' class='date' id='one'><span class='next'></span></p></div></div>" +
        "<div class='col-md-4'><div class='header-reset'><span onclick='resetFilters()'>Reset filters</span></div></div>" +
        "</div>"
    );

    $('#dateButton').click(function() {
      $('#datepick').datepicker('show');
});

    $(".date").daterangepicker({
      locale: {
        format: "DD.MM.YYYY"
      },
      isInvalidDate: function(date) {
        if (date > new Date()) {
            return true; 
        } else {
            return false; 
        }
    }
    });

    $(".date").val(moment(new Date()).format("DD.MM.YYYY"));

    backendDate = moment($(".date").val(), ["DD.MM.YYYY", "YYYY-MM-DD"])
      .subtract(1, "day")
      .valueOf();

    populate();

    

    $(".date").on("apply.daterangepicker", function(ev, picker) {
      backendDate = moment($(".date").val(), [
        "DD.MM.YYYY",
        "YYYY-MM-DD"
      ]).valueOf();
      dbAvalue = $(".date")
        .val()
        .split(" - ")[0];
      dbBvalue = $(".date")
        .val()
        .split(" - ")[1];
      var dateA = moment(dbAvalue, ["DD.MM.YYYY", "YYYY-MM-DD"]);
      var dateB = moment(dbBvalue, ["DD.MM.YYYY", "YYYY-MM-DD"]);
      sliceMe = dateB.diff(dateA, "days");
      interval = 3600000 * sliceMe;
      $(".header-calendar button").removeClass("active");
      populate();
    });

    $(".header-calendar button").click(function() {
      $(".header-calendar button").removeClass("active");
      $(this).addClass("active");
    });

    $("#tablesActivate").click(function() {
      populateTable();
    });

    $("#one-day").click(function() {
      backendDate = moment()
        .subtract(1, "day")
        .valueOf();
      sliceMe = 26;
      interval = 3600000;
      $(".date").val(moment(new Date()).format("DD.MM.YYYY"));
      populate();
    });

    $("#seven-days").click(function() {
      backendDate = moment()
        .subtract(7, "days")
        .valueOf();
      sliceMe = 3;
      interval = 3600000 * 7;
      $(".date").val(
        moment(new Date(), ["DD.MM.YYYY", "YYYY-MM-DD"])
          .subtract(7, "days")
          .format("DD.MM.YYYY") +
          " - " +
          moment(new Date()).format("DD.MM.YYYY")
      );
      populate();
    });
  } else {
    alert("There is no information for this MAC address.");
  }
  return false;
});

$("#info-display").click(function() {
  $(this).toggleClass("opened")
  $("#hgw-info").toggleClass("open");
});
   

function closeInfo() {
  $("#hgw-info").removeClass("open");
  $("#info-display").removeClass("opened");
}