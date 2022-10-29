import * as func from './functions.js';

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

const modalBtnsDOM = qsa('.buttonModalInit');

const classes = { 'display-flex': 'd--flex' };

// DOM ENDS -------------------------------------------------------------

const run = () => {
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
        pointsPopDOM
    );

    func.globeDropDownApply(navGlobeDOM, globePopDOM);
    func.globeDropDownApply(navGlobe2DOM, globePop2DOM);

    func.pancakePriceApi();
};

// RUN APP
run();
