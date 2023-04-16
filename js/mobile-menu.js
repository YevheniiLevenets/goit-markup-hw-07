(() => {
  const menuVars = {
    openMenuBtn: document.querySelectorAll("[data-menu-open]"),
    closeMenuBtn: document.querySelectorAll("[data-menu-close]"),
    menu: document.querySelector(".menu-backdrop"),
    burger: document.querySelector(".burger"),
    modalPaddingElements: [].filter.call(document.all, e => getComputedStyle(e).position == 'fixed'),
    body: document.querySelector(".body"),
    bodyPadding: window.innerWidth - document.querySelector('.main').offsetWidth
  };

   menuVars.openMenuBtn.forEach(openBtn => {
      openBtn.addEventListener("click", menuOpen);
   });

   menuVars.closeMenuBtn.forEach(closeBtn => {
      closeBtn.addEventListener("click", menuClose);
   });

   function menuOpen() {
      toggleMenu();
      paddingToggle();
   }

   function menuClose() {
      toggleMenu();
      setTimeout(function () {
         paddingToggle();
      }, 600);
   }   
   
   function toggleMenu() {
     menuVars.menu.classList.toggle("is-open");
     menuVars.burger.classList.toggle("is-open");
  }  

   function paddingToggle() {
    menuVars.body.classList.toggle("lock");
    menuVars.modalPaddingElements.forEach(modalPaddingElements => {
      if (menuVars.body.classList.contains('lock')) {
        menuVars.body.style.paddingRight = menuVars.bodyPadding + 'px';
        modalPaddingElements.style.paddingRight = menuVars.bodyPadding + 'px';
      }
      else {
        menuVars.body.style.paddingRight = '0px';
        modalPaddingElements.style.paddingRight = '0px';
      }
    });
  }   
})();