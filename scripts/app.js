import * as func from './functions.js';

func.initStorage();

const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => document.querySelectorAll(selector);

// DOM -------------------------------------------------------------------
// THEME DOM-------------------------------
const htmlElementDOM = qs('html');
const changeThemeBtnsDOM = qsa('.changeTheme');
const navGearBtnDOM = qs('.navGearBtn');
const settingsDOM = qs('.settings');
const settingsWindowDOM = qs('.settings-window');
const closeThemeModalDOM = qs('.closeThemeModal');
// ---------------------------------------

// MODAL DOM --------------------------------
const walletModelBackgroundDOM = qs('.walletModalBackground');
const walletModalDOM = qs('.walletModal');
const modalBtnsDOM = qsa('.buttonModalInit');
// ---------------------------------------
// MENU MODAL --------------------------
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
const navEarnSubDOM = qs('.navEarnSub');
const earnPopSubDOM = qs('.earnPopSub');
const navWinSubDOM = qs('.navWinSub');
const winPopSubDOM = qs('.winPopSub');
const navNftSubDOM = qs('.navNftSub');
const nftPopSubDOM = qs('.nftPopSub');
const navPointsSubDOM = qs('.navPointsSub');
const pointsPopSubDOM = qs('.pointsPopSub');
const fullScreenPopDOM = qs('.fullScreenPop');
// ---------------------------------------------------

const classes = { 'display-flex': 'd--flex' };

// DOM ENDS -------------------------------------------------------------

// MODEL ----------------------------------------------------------------

const run = () => {
    // THEME init ------------------------------------------------------
    func.update(htmlElementDOM);
    func.initThemeBtns(changeThemeBtnsDOM, htmlElementDOM);
    // -----------------------------------------------------------------

    // WALLET MODAL ----------------------------------------------------
    modalBtnsDOM.forEach((btn) => {
        func.createModal(
            btn, // to fire event
            walletModelBackgroundDOM, // to release event
            walletModelBackgroundDOM, // DOM to be controlled
            classes['display-flex'], // class to be toggled
            walletModalDOM // inner HTML
        );
    });
    // ------------------------------------------------------------------

    // THEME MODAL -------------------------------------------
    func.createModal(
        navGearBtnDOM,
        settingsDOM,
        settingsDOM,
        classes['display-flex'],
        settingsWindowDOM
    );

    closeThemeModalDOM.addEventListener('click', () => {
        settingsDOM.classList.toggle(classes['display-flex']);
    });

    // ------------------------------------------------------

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
        networkSelectPopDOM,
        navEarnSubDOM,
        earnPopSubDOM,
        navWinSubDOM,
        winPopSubDOM,
        navNftSubDOM,
        nftPopSubDOM,
        navPointsSubDOM,
        pointsPopSubDOM
    );

    func.globeDropDownApply(navGlobeDOM, globePopDOM);
    func.globeDropDownApply(navGlobe2DOM, globePop2DOM);

    // func.pancakePriceApi();
    func.networkSelection();

    func.fullScreenPopRun(navEarnSubDOM, fullScreenPopDOM);
    func.fullScreenPopRun(earnPopSubDOM, fullScreenPopDOM);
    func.fullScreenPopRun(navWinSubDOM, fullScreenPopDOM);
    func.fullScreenPopRun(winPopSubDOM, fullScreenPopDOM);
    func.fullScreenPopRun(navNftSubDOM, fullScreenPopDOM);
    func.fullScreenPopRun(nftPopSubDOM, fullScreenPopDOM);
    func.fullScreenPopRun(navPointsSubDOM, fullScreenPopDOM);
    func.fullScreenPopRun(pointsPopSubDOM, fullScreenPopDOM);
};

// RUN APP
run();
