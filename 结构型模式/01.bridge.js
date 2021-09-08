"use strict";
var struct_mode_01;
(function (struct_mode_01) {
    // 功能类
    class GoodLove {
        say() {
            return '【甜的爱情】留在你身边,陪你。人间相伴,共赴天涯海角。';
        }
    }
    class BadLove {
        say() {
            return "【变质的爱情】太差了，有机会换一个吧。分手前得搞点实惠的，那房子不错。";
        }
    }
    // 产品类
    class Man {
        feel;
        constructor(feel) {
            this.feel = feel;
        }
        setFeel(feel) {
            this.feel = feel;
            return this;
        }
        love() {
            console.log(`男人觉得：${this.feel.say()}`);
            return this;
        }
    }
    class Woman {
        feel;
        constructor(feel) {
            this.feel = feel;
        }
        setFeel(feel) {
            this.feel = feel;
            return this;
        }
        love() {
            console.log(`女人觉得：${this.feel.say()}`);
            return this;
        }
    }
    new Man(new GoodLove()).love().setFeel(new BadLove()).love();
    new Woman(new GoodLove()).love().setFeel(new BadLove()).love();
})(struct_mode_01 || (struct_mode_01 = {}));
