(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-contact-open]"),
      openModalBtnMenu: document.querySelector("[data-contact-open-menu]"),
      closeModalBtn: document.querySelector("[data-contact-close]"),
      modal: document.querySelector("[data-modal-contact]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.openModalBtnMenu.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();
