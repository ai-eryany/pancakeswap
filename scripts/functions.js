// HELPER FUNCTIONS
const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => document.querySelectorAll(selector);

// MODAL FUNCTIONS --------------------------------
const switcher = (htmlClass) => {
    console.log(1);
    htmlClass.addEventListener('click', (evt) => {
        evt.target.classList.toggle('walletModelBackground--flex');
    });
};

const walletModalBuffer = (htmlClass) => {
    htmlClass.addEventListener('click', (evt) => {
        evt.stopPropagation();
    });
};

// EXPORT FUNCTION
const pairButtonEvent = (walletModelBackground, walletModal) => {
    switcher(walletModelBackground);
    walletModalBuffer(walletModal);
};
// MODAL FUNCTIONS END --------------------------------

// EXPORT HERE
export { qs, qsa, pairButtonEvent };
