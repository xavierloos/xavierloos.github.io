document.addEventListener('DOMContentLoaded', (event) => {
  // Call the function to change the menu depending on the size of the screen
  changeMenu();
  // If the windows is resize
  window.onresize = () => {
    changeMenu();
  };

  function changeMenu() {
    // Check the size of the screen
    if (window.screen.width < 992) {
      document.getElementById("menu").style.display = "none"
      document.getElementById("mobile-menu").style.display = "block"
      document.getElementById("section-topbar").style.position = "absolute"

    } else {
      document.getElementById("menu").style.display = "block"
      document.getElementById("mobile-menu").style.display = "none"
      // call the scrolling function
      window.onscroll = function () {
        scrollFunction()
      };
    }
  }

  function scrollFunction() {
    navlinks = document.getElementsByClassName('smothscroll')
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("topbar-inner").style.height = "100px";
      document.getElementById("logo").style.width = "100px";
      document.getElementById("logo").style.display = "flex"
      document.getElementById("topbar-inner").style.background = "#F9AA33";
      document.getElementById("row-header").style.flexDirection = "row";
      document.getElementById("nav").style.justifyContent = "flex-end";
      for (i = 0; i < navlinks.length; i++) {
        navlinks[i].style.color = "black"
      }

    } else {
      document.getElementById("topbar-inner").style.height = "350px";
      document.getElementById("topbar-inner").style.background = "";
      document.getElementById("row-header").style.flexDirection = "column"
      document.getElementById("nav").style.justifyContent = "";
      document.getElementById("logo").style.width = "";
      document.getElementById("logo").style.display = "";
      document.getElementsByClassName('smothscroll')[0].style.color = "red"
      for (i = 0; i < navlinks.length; i++) {
        navlinks[i].style.color = "white"
      }
    }
  }
  // function scrollFunctionMobile() {
  //   navlinks = document.getElementsByClassName('smothscroll')
  //   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
  //     document.getElementById("topbar-inner").style.height = "100px";
  //     document.getElementById("logo").style.width = "100px";
  //     document.getElementById("logo").style.display = "flex"
  //     document.getElementById("topbar-inner").style.background = "#F9AA33";
  //     document.getElementById("row-header").style.flexDirection = "row";
  //     document.getElementById("nav").style.justifyContent = "flex-end";

  //     for (i = 0; i < navlinks.length; i++) {
  //       navlinks[i].style.color = "black"
  //     }

  //   } else {
  //     document.getElementById("topbar-inner").style.height = "350px";
  //     document.getElementById("topbar-inner").style.background = "";
  //     document.getElementById("row-header").style.flexDirection = "column"
  //     document.getElementById("nav").style.justifyContent = "";
  //     document.getElementById("logo").style.width = "";
  //     document.getElementById("logo").style.display = "";
  //     document.getElementsByClassName('smothscroll')[0].style.color = "red"
  //     for (i = 0; i < navlinks.length; i++) {
  //       navlinks[i].style.color = "white"
  //     }
  //   }
  // }
})