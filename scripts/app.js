import * as vars from './vars.js';
import * as func from './functions.js';

const run = () => {
    func.createModal(
        vars.buttonModalInitDOM, // DOM To be pressed to enter
        vars.walletModelBackgroundDOM, // DOM To be pressed to exit
        vars.walletModelBackgroundDOM, // DOM to be controlled.
        vars.displayFlexClass, // DOM Class to be toggled.
        vars.walletModalDOM // inner DOM to act as a buffer
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
