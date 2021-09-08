"use strict";
var creative_mode_01;
(function (creative_mode_01) {
    // 子类枚举
    let ClassName;
    (function (ClassName) {
        ClassName[ClassName["LogOne"] = 0] = "LogOne";
        ClassName[ClassName["LogTwo"] = 1] = "LogTwo";
    })(ClassName || (ClassName = {}));
    // 工厂类
    class MyFactory {
        static map = new Map();
        static addConsoleLog(key, value) {
            this.map.set(key, value);
            return this;
        }
        static getConsoleLog(key) {
            return this.map.get(key);
        }
    }
    // 子类的实现 
    class LogOne {
        printLog() {
            console.log('log one 。。。');
        }
    }
    class LogTwo {
        printLog() {
            console.log('log two 。。。');
        }
    }
    // 给这个工厂添加产品
    MyFactory.addConsoleLog(ClassName.LogOne, new LogOne()).addConsoleLog(ClassName.LogTwo, new LogTwo());
    // 从工厂中拿出对象来使用
    MyFactory.getConsoleLog(ClassName.LogOne)?.printLog();
    MyFactory.getConsoleLog(ClassName.LogTwo)?.printLog();
})(creative_mode_01 || (creative_mode_01 = {}));
