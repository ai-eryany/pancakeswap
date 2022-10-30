import * as func from './functions.js';

func.initStorage();

const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => document.querySelectorAll(selector);

// DOM -------------------------------------------------------------------
const htmlElementDOM = qs('html');
const walletModelBackgroundDOM = qs('.walletModalBackground');
const walletModalDOM = qs('.walletModal');
const navTradeDOM = qs('.navTrade');
const tradePopDOM = qs('.tradePop');
const navEarnDOM = qs('.navEarn');
const earnPopDOM = qs('.earnPop');
const navWinDOM = qs('.navWin');
const winPopDOM = qs('.winPop');
const navNftDOM = qs('.navNft');
const nftPopDOM = qs('.nftPop');
const navPointsDOM = qs('.navPoints');
const pointsPopDOM = qs('.pointsPop');
const navGlobeDOM = qs('.navGlobe');
const globePopDOM = qs('.globePop');
const navGlobe2DOM = qs('.navGlobe2');
const globePop2DOM = qs('.globePop2');
const networkSelectDOM = qs('.networkSelect');
const networkSelectPopDOM = qs('.networkSelectPop');
const modalBtnsDOM = qsa('.buttonModalInit');
const changeThemeBtnsDOM = qsa('.changeTheme');

const classes = { 'display-flex': 'd--flex' };

// DOM ENDS -------------------------------------------------------------

// MODEL ----------------------------------------------------------------
let model = func.getStorage('model');

const run = () => {
    func.setStorage('model', model);
    func.renderTheme(model, htmlElementDOM);
    func.initThemeBtns(model, changeThemeBtnsDOM, htmlElementDOM);

    modalBtnsDOM.forEach((btn) => {
        func.createModal(
            btn,
            walletModelBackgroundDOM,
            walletModelBackgroundDOM,
            classes['display-flex'],
            walletModalDOM
        );
    });

    func.navMenuDropDownApply(
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
    );

    func.globeDropDownApply(navGlobeDOM, globePopDOM);
    func.globeDropDownApply(navGlobe2DOM, globePop2DOM);

    func.pancakePriceApi();
    func.networkSelection();
};

// RUN APP
run();
