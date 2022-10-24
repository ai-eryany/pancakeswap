import * as vars from './vars.js';
import * as func from './functions.js';

const run = () => {
    func.connectWalletBtnEvent(vars.walletModelBackground, vars.walletModal);
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

run();
