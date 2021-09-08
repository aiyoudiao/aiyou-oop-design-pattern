"use strict";
var action_mode_03;
(function (action_mode_03) {
    class Computer {
        price = 6000;
        buy(price) {
            // 打六折
            const finalPrice = this.price * 0.6;
            return price - finalPrice;
        }
        run() {
            return '计算机开机 =======> 欢迎使用 windows10';
        }
    }
    class Pad {
        price = 10000;
        run() {
            return '平板开机 =======> 欢迎使用 华为平板';
        }
        buy(price) {
            // 打七五折
            const finalPrice = this.price * 0.75;
            return price - finalPrice;
        }
    }
    class TV {
        price = 3000;
        run() {
            return '电视开机 =======> 欢迎使用 小米电视';
        }
        buy(price) {
            // 打8折
            const finalPrice = this.price * 0.8;
            return price - finalPrice;
        }
    }
    // 操作类
    class Student {
        money;
        constructor(money) {
            this.money = money;
        }
        get(strategyType) {
            const strategy = new strategyList[strategyType];
            const result = strategy.buy(this.money);
            if (result < 0) {
                return '钱不够，购买失败';
            }
            return strategy.run();
        }
    }
    // 策略的枚举
    let StrategyType;
    (function (StrategyType) {
        StrategyType[StrategyType["Computer"] = 0] = "Computer";
        StrategyType[StrategyType["Pad"] = 1] = "Pad";
        StrategyType[StrategyType["TV"] = 2] = "TV";
    })(StrategyType || (StrategyType = {}));
    // 策略的定义
    const strategyList = {
        [StrategyType.Computer]: Computer,
        [StrategyType.Pad]: Pad,
        [StrategyType.TV]: TV,
    };
    const xiaoming = new Student(5000);
    console.log("小明买计算机", xiaoming.get(StrategyType.Computer));
    console.log("小明买平板电脑", xiaoming.get(StrategyType.Pad));
    console.log("小明买液晶电视机", xiaoming.get(StrategyType.TV));
})(action_mode_03 || (action_mode_03 = {}));
