"use strict";
var action_mode_09;
(function (action_mode_09) {
    // 执行类：五星厨师
    class FiveStarChef {
        // 做一份麻辣小龙虾
        stirFrySpicyCrayfish() {
            const reuslt = '一盘麻辣小龙虾！！！！！';
            console.log('五星厨师在线做菜，来喽一盘' + reuslt);
            return reuslt;
        }
        // 做一份红烧东坡肉
        stirFryBraisedDongpoMeat() {
            const reuslt = '一盘红烧东坡肉！！！！！';
            console.log('五星厨师在线做菜，来喽一盘' + reuslt);
            return reuslt;
        }
    }
    // 命令类：做一份麻辣小龙虾
    class SpicyCrayfish {
        fiveStarChef;
        constructor(fiveStarChef) {
            this.fiveStarChef = fiveStarChef;
            console.log('命令：做一份麻辣小龙虾');
        }
        stirFry() {
            console.log('执行命令：做一份麻辣小龙虾');
            return this.fiveStarChef.stirFrySpicyCrayfish();
        }
    }
    // 命令类：做一份红烧东坡肉
    class BraisedDongpoMeat {
        fiveStarChef;
        constructor(fiveStarChef) {
            this.fiveStarChef = fiveStarChef;
            console.log('命令：做一份红烧东坡肉');
        }
        stirFry() {
            console.log('执行命令：做一份红烧东坡肉');
            return this.fiveStarChef.stirFryBraisedDongpoMeat();
        }
    }
    // 调用类：VIP客户
    class VIPCustomes {
        mealList = new Array();
        // 点菜
        addOrder(orderCmd) {
            this.mealList.push(orderCmd);
        }
        // 吃菜
        eat() {
            if (!this.mealList.length) {
                return;
            }
            while (this.mealList.length) {
                const meal = this.mealList.splice(0, 1)[0];
                const result = meal.stirFry();
                console.log('吃：' + result);
            }
            console.log('都吃完了！！！！！');
        }
    }
    const fiveStarChef = new FiveStarChef();
    const spicyCrayfish = new SpicyCrayfish(fiveStarChef);
    const braisedDongpoMeat = new BraisedDongpoMeat(fiveStarChef);
    const vipCustomes = new VIPCustomes();
    // 没点菜，直接吃
    vipCustomes.eat();
    // 点两单
    vipCustomes.addOrder(spicyCrayfish);
    vipCustomes.addOrder(braisedDongpoMeat);
    // 吃
    vipCustomes.eat();
    // 点两单
    vipCustomes.addOrder(braisedDongpoMeat);
    vipCustomes.addOrder(spicyCrayfish);
    // 吃
    vipCustomes.eat();
})(action_mode_09 || (action_mode_09 = {}));
