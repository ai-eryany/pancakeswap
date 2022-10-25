// HELPER FUNCTIONS
const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => document.querySelectorAll(selector);

// MODAL FUNCTIONS ------------------------------------------------
// this function is used to toggle a given class on a given element.
const switcher = (domToBePressed, domToBeControled, classToBeToggled) =>
    domToBePressed.addEventListener('click', (evt) =>
        domToBeControled.classList.toggle(classToBeToggled)
    );

// This function goes along with switcher, you can implement this function with the child. MODAL box
const buffer = (domElement) =>
    domElement.addEventListener('click', (evt) => evt.stopPropagation());

// EXPORT FUNCTION
const createModal = (
    domFireEvent, // DOM to be pressed to enter Modal
    domReleaseEvent, // DOM To be pressed to exit the Modal.
    domToBeControled, // DOM to be controlled.
    classToBeToggled, // Class to be toggled.
    innerDOMbuffer // inner DOM to act as a buffer.
) => {
    switcher(domFireEvent, domToBeControled, classToBeToggled);
    switcher(domReleaseEvent, domToBeControled, classToBeToggled);
    buffer(innerDOMbuffer);
};
// MODAL FUNCTION ENDS ---------------------------------------------

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

const globeDropDown = (element, dropDown) => {
    element.addEventListener('mouseover', () => {
        dropDown.style.display = 'block';
    });
    dropDown.addEventListener('mouseover', () => {
        dropDown.style.display = 'block';
    });
    dropDown.addEventListener('mouseout', () => {
        dropDown.style.display = 'none';
    });
    element.addEventListener('mouseout', () => {
        dropDown.style.display = 'none';
    });
};
const globeDropDownApply = (navGlobe, globePop) => {
    globeDropDown(navGlobe, globePop);
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
    const result = Math.round(pancakeswap * 1000) / 1000 - 0.034;
    pPrice.innerText = `$${result}`;
}

export {
    qs,
    qsa,
    createModal,
    navMenuDropDown,
    navMenuDropDownApply,
    pancakePriceApi,
    globeDropDown,
    globeDropDownApply,
};
