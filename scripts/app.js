import * as func from './functions.js';
import * as vars from './vars.js';

const run = () => {
    func.pairButtonEvent(vars.modelBackground, vars.walletModal);
    func.navMenuDropDownApply(
        vars.navTrade,
        vars.tradePop,
        vars.earnPop,
        vars.navEarn
    );
};

run();
