"use strict";
var struct_mode_02;
(function (struct_mode_02) {
    //#region 
    // 产品类
    class SuperStar {
        signAContract() {
            console.log('—————— 签约 ——————');
        }
    }
    // 代理类：继承
    class StarAgent extends SuperStar {
        signAContract() {
            console.log('—————— 经纪人准备合同 ——————');
            super.signAContract();
            console.log('—————— 签约完毕 ——————');
        }
    }
    // 代理类：借用
    class StarAgent2 {
        superStar = new SuperStar();
        signAContract() {
            console.log('—————— 经纪人准备合同 2——————');
            this.superStar.signAContract();
            console.log('—————— 签约完毕 2——————');
        }
    }
    // 代理类：动态代理
    class StarAgent3 {
        superStar;
        signAContract() {
            if (!this.superStar) {
                console.log('当前经济人未签约任何明星。');
                return;
            }
            console.log('—————— 经纪人准备合同 3——————');
            this.superStar.signAContract();
            console.log('—————— 签约完毕 3——————');
        }
        setStar(star) {
            this.superStar = star;
            return this;
        }
    }
    // 使用 1：继承
    new StarAgent().signAContract();
    // 使用2：代理借用
    new StarAgent2().signAContract();
    // 使用3：动态代理
    new StarAgent3().setStar(new SuperStar()).signAContract();
})(struct_mode_02 || (struct_mode_02 = {}));
