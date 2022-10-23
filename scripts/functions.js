const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => document.querySelectorAll(selector);

const switcher = (htmlClass) => {
    console.log(1);
    htmlClass.addEventListener('click', (evt) => {
        htmlClass.classList.toggle('modelBackground--flex');
    });
};

const walletModalBlocker = (htmlClass) => {
    htmlClass.addEventListener('click', (evt) => {
        evt.stopPropagation();
    });
};

const pairButtonEvent = (modelBackground, walletModal) => {
    switcher(modelBackground);
    walletModalBlocker(walletModal);
};

export { qs, qsa, switcher, walletModalBlocker, pairButtonEvent };
