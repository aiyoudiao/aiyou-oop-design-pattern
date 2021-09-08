"use strict";
var struct_mode_07;
(function (struct_mode_07) {
    class Mom {
        washVegetable() {
            return '妈妈洗碗';
        }
        washDishes() {
            return '妈妈洗菜';
        }
        cookAdish() {
            return '妈妈做菜';
        }
    }
    class Dad {
        washVegetable() {
            return '爸爸洗碗';
        }
        washDishes() {
            return '爸爸洗菜';
        }
        cookAdish() {
            return '爸爸做菜';
        }
    }
    // 外观类
    class DinnerFacade {
        mom = new Mom();
        dad = new Dad();
        cook(who) {
            console.log('制作晚餐中...');
            if (who === 'mom') {
                this.cookMom();
            }
            else if (who === 'dad') {
                this.cookDad();
            }
            else if (who === 'dad mom') {
                this.cookDadMom();
            }
            else {
                console.log('无人制作晚餐，请到外面饭店就餐');
                return this;
            }
            console.log('制作晚餐完毕...');
            return this;
        }
        cookMom() {
            console.log(this.mom.washVegetable());
            console.log(this.mom.washDishes());
            console.log(this.mom.cookAdish());
        }
        cookDad() {
            console.log(this.dad.washVegetable());
            console.log(this.dad.washDishes());
            console.log(this.dad.cookAdish());
        }
        cookDadMom() {
            console.log(this.dad.washVegetable());
            console.log(this.dad.washDishes());
            console.log(this.mom.cookAdish());
        }
    }
    // 使用
    new DinnerFacade().cook('mom').cook('dad').cook('dad mom').cook('');
})(struct_mode_07 || (struct_mode_07 = {}));
