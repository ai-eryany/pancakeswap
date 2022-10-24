import * as vars from './vars.js';
import * as func from './functions.js';

const run = () => {
    // on buttons
    func.createModal(
        vars.buttonIt, // to be pressed
        vars.walletModelBackground, // to be controled
        vars.displayFlexClass, // class to toggled.
        vars.walletModal // inner buffer
    );

    // on the div to toggled it off. very simple and quick implementation, you can reuse this function createModal() if you want, follow the order.
    // * 1- DOM to be pressed
    // * 2- DOM to be controlled
    // * 3- class to be toggled from the DOM
    // * 4- inner buffer listener.
    func.createModal(
        vars.walletModelBackground, // to be pressed
        vars.walletModelBackground, // to be controlled
        vars.displayFlexClass, // class to toggled.
        vars.walletModal // inner buffer
    );
    func.navMenuDropDownApply(
        vars.navTrade,
        vars.tradePop,
        vars.earnPop,
        vars.navEarn,
        vars.navWin,
        vars.winPop,
        vars.navNft,
        vars.nftPop,
        vars.navPoints,
        vars.pointsPop
    );
    func.pancakePriceApi();
};

// RUN APP
run();
