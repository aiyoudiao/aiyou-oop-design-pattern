"use strict";
var struct_mode_03;
(function (struct_mode_03) {
    // 产品类
    class HongMiK30 {
        run() {
            console.log('运行红米K30手机');
        }
    }
    // 装饰器
    class PhoneDecorator {
        phoneDecorator;
        constructor(phoneDecorator) {
            this.phoneDecorator = phoneDecorator;
        }
        run() {
            this.phoneDecorator.run();
        }
    }
    // 实体的装饰类
    class FanPhoneDecorator extends PhoneDecorator {
        constructor(phone) {
            super(phone);
        }
        run() {
            super.run();
            this.runFan();
        }
        runFan() {
            console.log('安装手机电风扇，运行手机电扇');
        }
    }
    // 实体的装饰类
    class MemoryPhoneDecorator extends PhoneDecorator {
        constructor(phone) {
            super(phone);
        }
        run() {
            this.runMemory();
            super.run(); // ! 这里是super 不是 this
        }
        runMemory() {
            console.log('硬件升级，加大内存');
        }
    }
    // 使用 一：尝试一下功能的追加
    {
        const hongMiK30 = new HongMiK30();
        const homeMiK30DecorateFan = new FanPhoneDecorator(hongMiK30);
        const homeMiK30DecorateMemory = new MemoryPhoneDecorator(hongMiK30);
        console.log('hongMiK30');
        hongMiK30.run();
        console.log('homeMiK30DecorateFan');
        homeMiK30DecorateFan.run();
        console.log('homeMiK30DecorateMemory');
        homeMiK30DecorateMemory.run();
    }
    // 使用 二：动态的追加功能 面向对象
    {
        const hongMiK30 = new HongMiK30();
        const homeMiK30DecorateFan = new FanPhoneDecorator(hongMiK30);
        const homeMiK30DecorateMemory = new MemoryPhoneDecorator(homeMiK30DecorateFan);
        console.log('homeMiK30DecorateMemory');
        homeMiK30DecorateMemory.run();
    }
    // 使用三：动态的追加功能 AOP
    {
        const fnProtoType = Function.prototype;
        fnProtoType.addBeforeFn = function (boforeFn) {
            const that = this;
            return function (...args) {
                boforeFn(...args);
                return that(...args);
            };
        };
        fnProtoType.addAfterFn = function (afterFn) {
            const that = this;
            return function (...args) {
                const result = that(...args);
                afterFn(...args);
                return result;
            };
        };
        const callMethods1 = function callMethods1() {
            console.log('调用 callMethods1');
        };
        const callMethods2 = function callMethods2() {
            console.log('调用 callMethods2');
        };
        const callMethods3 = function callMethods3() {
            console.log('调用 callMethods3');
        };
        callMethods2
            .addBeforeFn(callMethods1)
            .addAfterFn(callMethods3)();
    }
})(struct_mode_03 || (struct_mode_03 = {}));
