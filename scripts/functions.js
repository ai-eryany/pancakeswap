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

const updateModel = (oldModel, newModel) => (oldModel = newModel);

const initStorage = () => {
    !getStorage('model') ? setStorage('model', INIT_MODEL) : null;
};

// ----------------------------------------------------------------

// MODAL FUNCTIONS ------------------------------------------------
// this function is used to toggle a given class on a given element.
const toggler = (domToBePressed, domToBeControlled, classToBeToggled) =>
    domToBePressed.addEventListener('click', (evt) =>
        domToBeControlled.classList.toggle(classToBeToggled)
    );

// This function goes along with switcher, you can implement this function with the child. MODAL box
const buffer = (domElement) =>
    domElement.addEventListener('click', (evt) => evt.stopPropagation());

// EXPORT FUNCTION
// pass a key/value pair will be better to avoid the disordering.
const createModal = (
    domFireEvent, // DOM to be pressed to enter Modal
    domReleaseEvent, // DOM To be pressed to exit the Modal.
    domToBeControlled, // DOM to be controlled.
    classToBeToggled, // Class to be toggled.
    innerDOMbuffer // inner DOM to act as a buffer.
) => {
    toggler(domFireEvent, domToBeControlled, classToBeToggled);
    toggler(domReleaseEvent, domToBeControlled, classToBeToggled);
    buffer(innerDOMbuffer);
};
// ---------------------------------------------------------------

// THEME FUNCTIONS ------------------------------------------------

const renderTheme = (m, htmlDOM) => {
    if (m.isDarkTheme === null) htmlDOM.dataset.theme = 'none';
    else htmlDOM.dataset.theme = m.isDarkTheme ? 'dark' : 'light';
};

const toggleTheme = (m) => ({
    ...m,
    isDarkTheme: !m.isDarkTheme,
});

// ------------------------------------------------------------------

// EVENTS FUNCTIONS-----------------------------------------

// m for model
const initThemeBtns = (m, btnsDOM, htmlDOM) => {
    btnsDOM.forEach((btn) => {
        btn.addEventListener('click', () => {
            const newModel = toggleTheme(m);
            updateModel(m, newModel);
            setStorage('model', m);
            renderTheme(m, htmlDOM);
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
const globeDropDownApply = (navGlobeDOM, globePopDOM) => {
    globeDropDown(navGlobeDOM, globePopDOM);
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
    pointsPopDOM,
    networkSelectDOM,
    networkSelectPopDOM
) => {
    navMenuDropDown(navTradeDOM, tradePopDOM);
    navMenuDropDown(navEarnDOM, earnPopDOM);
    navMenuDropDown(navWinDOM, winPopDOM);
    navMenuDropDown(navNftDOM, nftPopDOM);
    navMenuDropDown(navPointsDOM, pointsPopDOM);
    navMenuDropDown(networkSelectDOM, networkSelectPopDOM);
};

function networkSelection() {
    const selectETHDOM = document.getElementById('selectETH');
    const ethLabelDOM = document.querySelector('.ethLabel');
    const ethImageDOM = document.querySelector('.ethImage');
    const selectBNBDOM = document.getElementById('selectBNB');
    const bnbLabelDOM = document.querySelector('.bnbLabel');
    const bnbImageDOM = document.querySelector('.bnbImage');
    const networkSelectPopDOM = document.querySelector('.networkSelectPop');
    selectETHDOM.addEventListener('click', () => {
        bnbLabelDOM.style.display = 'none';
        bnbImageDOM.style.display = 'none';
        ethLabelDOM.style.display = 'flex';
        ethImageDOM.style.display = 'flex';
        networkSelectPopDOM.style.display = 'none';
    });
    selectBNBDOM.addEventListener('click', () => {
        bnbLabelDOM.style.display = 'flex';
        bnbImageDOM.style.display = 'flex';
        ethLabelDOM.style.display = 'none';
        ethImageDOM.style.display = 'none';
        networkSelectPopDOM.style.display = 'none';
    });
}

async function pancakePriceApi() {
    const response = await fetch('https://api.pancakeswap.info/api/v2/tokens');
    const prices = await response.json();
    const pancakeswap = Object.values(Object.values(prices)[1])[2].price;
    console.log(pancakeswap);
    const result = Math.round(pancakeswap * 1000) / 1000 - 0.034;
    pPrice.innerText = `$${result}`;
}

export {
    initStorage,
    setStorage,
    getStorage,
    createModal,
    navMenuDropDown,
    navMenuDropDownApply,
    pancakePriceApi,
    globeDropDown,
    globeDropDownApply,
    initThemeBtns,
    renderTheme,
    networkSelection,
};
