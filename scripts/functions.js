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


const navMenuDropDown = (element, dropDown) => {
    element.addEventListener('mouseover', () => {
        dropDown.style.display = 'flex';
    });
    dropDown.addEventListener('mouseover', () => {
        dropDown.style.display = 'flex';
    });
    dropDown.addEventListener('mouseout', () => {
        dropDown.style.display = 'none';
    });
    element.addEventListener('mouseout', () => {
        dropDown.style.display = 'none';
    });
};

const navMenuDropDownApply = (
    navTrade,
    tradePop,
    earnPop,
    navEarn,
    navWin,
    winPop,
    navNft,
    nftPop,
    navPoints,
    pointsPop
) => {
    navMenuDropDown(navTrade, tradePop);
    navMenuDropDown(navEarn, earnPop);
    navMenuDropDown(navWin, winPop);
    navMenuDropDown(navNft, nftPop);
    navMenuDropDown(navPoints, pointsPop);
};

async function pancakePriceApi() {
    const response = await fetch('https://api.pancakeswap.info/api/v2/tokens');
    const prices = await response.json();
    const pancakeswap = Object.values(Object.values(prices)[1])[2].price;
    console.log(pancakeswap);
    const result = Math.round(pancakeswap * 1000) / 1000;
    pPrice.innerText = `$${result}`;
}

export {
    qs,
    qsa,
    pairButtonEvent,
    navMenuDropDown,
    navMenuDropDownApply,
    pancakePriceApi,
};

