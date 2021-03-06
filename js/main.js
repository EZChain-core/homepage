(function () {
  'use strict';

  window.addEventListener('load', () => {
    on_page_load();
  });

  /**
   * Function gets called when page is loaded.
   */
  function on_page_load() {
    // Initialize On-scroll Animations
    AOS.init({
      anchorPlacement: 'top-left',
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      disable: 'mobile',
    });
  }

  /**
   * Navbar effects and scrolltop buttons upon scrolling
   */
  const navbar = document.getElementById('header-nav');
  var body = document.getElementsByTagName('body')[0];
  window.onscroll = () => {
    if (window.scrollY > 0) {
      navbar.classList.add('fixed-top', 'shadow-sm');
      body.style.paddingTop = navbar.offsetHeight + 'px';
    } else {
      navbar.classList.remove('fixed-top', 'shadow-sm');
      body.style.paddingTop = '0px';
    }
  };

  const bigLink = document.getElementsByClassName('big-link');
  let isClick = false
  bigLink.addEventListener("click", function(){
    if(!isClick) {
      document.getElementsById('sub-menu-explorer').classList.add("isClick");
      isClick = true
    }else{
      document.getElementsById('sub-menu-explorer').classList.add("isClick");
      isClick = false
    }
  });
  
})();
