const INIT_MODEL = {
    isDarkTheme: null, // Boolean true or false or null
};

// Local Storage functions
const setStorage = (key, item) => {
    try {
        const jsonItem = JSON.stringify(item);
        localStorage.setItem(key, jsonItem);
    } catch (e) {
        console.log(e.message);
    }
};

const getStorage = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (e) {
        console.log(e.message);
    }
};

const init = () => {
    !get('model') ? set('model', INIT_MODEL) : null;
};

// ----------------------------------------------------------------

// MODAL FUNCTIONS ------------------------------------------------
// this function is used to toggle a given class on a given element.
const toggler = (domToBePressed, domToBeControled, classToBeToggled) =>
    domToBePressed.addEventListener('click', (evt) =>
        domToBeControled.classList.toggle(classToBeToggled)
    );

// This function goes along with switcher, you can implement this function with the child. MODAL box
const buffer = (domElement) =>
    domElement.addEventListener('click', (evt) => evt.stopPropagation());

// EXPORT FUNCTION
// pass a key/value pair will be better to avoid the misordering.
const createModal = (
    domFireEvent, // DOM to be pressed to enter Modal
    domReleaseEvent, // DOM To be pressed to exit the Modal.
    domToBeControled, // DOM to be controlled.
    classToBeToggled, // Class to be toggled.
    innerDOMbuffer // inner DOM to act as a buffer.
) => {
    toggler(domFireEvent, domToBeControled, classToBeToggled);
    toggler(domReleaseEvent, domToBeControled, classToBeToggled);
    buffer(innerDOMbuffer);
};
// ---------------------------------------------------------------

// THEME FUNCTIONS ------------------------------------------------

const toggleTheme = (oldModel) => ({
    ...oldModel,
    isDarkTheme: !oldModel.isDarkTheme,
});

const renderTheme = (oldModel, htmlDOM) => {
    if (oldModel.isDarkTheme === null) htmlDOM.dataset.theme = 'none';
    else htmlDOM.dataset.theme = oldModel.isDarkTheme ? 'dark' : 'light';
};

// ------------------------------------------------------------------

// EVENTS FUNCTIONS-----------------------------------------

// m for model
// updateM is a function updateModel
// updateS is a function updateStorage
const initTheme = (btnsDOM, htmlDOM) => {
    btnsDOM.forEach((btn) => {
        btn.addEventListener('click', () => {
            const newModel = toggleTheme(m);
            setStorage('model', newModel);
            renderTheme(newModel, htmlDOM);
        });
    });
};

// -----------------------------------------------------------------

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
    navTradeDOM,
    tradePopDOM,
    earnPopDOM,
    navEarnDOM,
    navWinDOM,
    winPopDOM,
    navNftDOM,
    nftPopDOM,
    navPointsDOM,
    pointsPopDOM
) => {
    navMenuDropDown(navTradeDOM, tradePopDOM);
    navMenuDropDown(navEarnDOM, earnPopDOM);
    navMenuDropDown(navWinDOM, winPopDOM);
    navMenuDropDown(navNftDOM, nftPopDOM);
    navMenuDropDown(navPointsDOM, pointsPopDOM);
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
    init,
    updateStorage,
    createModal,
    navMenuDropDown,
    navMenuDropDownApply,
    pancakePriceApi,
    globeDropDown,
    globeDropDownApply,
    toggleTheme,
    renderTheme,
    initTheme,
};
