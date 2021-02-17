let flechitas = document.getElementsByName("chevron-back-outline");
let listas = document.getElementsByClassName("lista");
let marca = document.getElementsByClassName("abre");

 /* Make dynamic date appear */
 (function () {
    if (document.getElementById("get-current-year")) {
      document.getElementById(
        "get-current-year"
      ).innerHTML = new Date().getFullYear();
    }
  })();
  /* Sidebar - Side navigation menu on mobile/responsive mode */
  function toggleNavbar(collapseID) {
    document.getElementById(collapseID).classList.toggle("hidden");
    document.getElementById(collapseID).classList.toggle("bg-white");
    document.getElementById(collapseID).classList.toggle("m-2");
    document.getElementById(collapseID).classList.toggle("py-3");
    document.getElementById(collapseID).classList.toggle("px-6");
  }
  /* Function for dropdowns */
  function openDropdown(event, dropdownID) {
    let element = event.target;
    while (element.nodeName !== "A") {
      element = element.parentNode;
    }
    Popper.createPopper(element, document.getElementById(dropdownID), {
      placement: "bottom-start",
    });
    document.getElementById(dropdownID).classList.toggle("hidden");
    document.getElementById(dropdownID).classList.toggle("block");
  }

  (function () {
    /* Chart initialisations */
    /* Line Chart */
    var config = {
      type: "line",
      data: {
        labels: [
          "18th",
          "20th",
          "22th",
          "24th",
          "26th",
          "28th",
          "30th",
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: [100, 120, 170, 167, 180, 177, 160],
            fill: false,
          },
          {
            label: new Date().getFullYear() - 1,
            fill: false,
            backgroundColor: "#fff",
            borderColor: "#fff",
            data: [60, 80, 70, 67, 80, 77, 100],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "white",
        },
        legend: {
          labels: {
            fontColor: "white",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "white",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "white",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "rgba(255, 255, 255, 0.15)",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    var ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);

    /* Bar Chart */
    config = {
      type: "bar",
      data: {
        labels: [
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC",
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#ed64a6",
            borderColor: "#ed64a6",
            data: [1000, 2000, 3000, 2500, 2700, 2500, 3000],
            fill: false,
            barThickness: 22,
          },
          {
            label: new Date().getFullYear() - 1,
            fill: false,
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: [700, 1700, 2700, 2000, 1800, 1500, 2000],
            barThickness: 22,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Orders Chart",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          labels: {
            fontColor: "rgba(0,0,0,.4)",
          },
          align: "end",
          position: "bottom",
        },
        scales: {
          xAxes: [
            {
              display: false,
              scaleLabel: {
                display: true,
                labelString: "Month",
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    ctx = document.getElementById("bar-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);
  })();
  //tocan esto y les parto la madre
  function w3_open() {
    document.getElementById("main").style.marginLeft = "25%";
    document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("mySidebar").style.display = "flex";
    document.getElementById("openNav").style.display = 'none';
    document.getElementById("closeNav").style.display='inline-flex';
  }
  //igual con este weones
  function w3_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("closeNav").style.display='none';
    document.getElementById("openNav").style.display = "inline-flex";
  }

  function abrir(n1, n2){
    //si marca es mayor que, significa que está oculta la lista, sino, entonces está abierta la lista

              if(marca.length>0){
                listas[n1].classList.add("cierra");
                listas[n1].classList.remove("abre");
                flechitas[n1].style.transition = "all 0.5s ease-in-out";
                flechitas[n1].style.transform = "rotate(-90deg) scale(1)";
                listas[n1].style.transition = "all 1s ease-in-out";
                listas[n1].style.display = "inline-flex";
              }
              else{
                listas[n1].classList.add("abre");
                listas[n1].classList.remove("cierra");
                flechitas[n1].style.transition = "all 0.5s ease-in-out";
                flechitas[n1].style.transform = "rotate(0deg) scale(1)";
                listas[n1].style.transition = "all 1s ease-in-out";
                listas[n1].style.display = "none";
              }

  }