"use strict";
var creative_mode_02;
(function (creative_mode_02) {
    // 工厂的枚举
    let FactoryName;
    (function (FactoryName) {
        FactoryName[FactoryName["MySubFactoryOne"] = 0] = "MySubFactoryOne";
        FactoryName[FactoryName["MySubFactoryTwo"] = 1] = "MySubFactoryTwo";
    })(FactoryName || (FactoryName = {}));
    // 产品的枚举
    let ClassName;
    (function (ClassName) {
        ClassName[ClassName["LogOne"] = 0] = "LogOne";
        ClassName[ClassName["LogTwo"] = 1] = "LogTwo";
    })(ClassName || (ClassName = {}));
    // 子工厂 负责创建产品
    class MySubFactoryOne {
        static map = new Map();
        static addConsoleLog(key, value) {
            this.map.set(key, value);
            return this;
        }
        static getConsoleLog(key) {
            return this.map.get(key);
        }
    }
    class MySubFactoryTwo {
        static map = new Map();
        static addConsoleLog(key, value) {
            this.map.set(key, value);
            return this;
        }
        static getConsoleLog(key) {
            return this.map.get(key);
        }
    }
    // 抽象工厂 负责创建工厂
    class MyFactory {
        static factoryMap = new Map();
        static addFactory(key, value) {
            this.factoryMap.set(key, value);
            return this;
        }
        static getFactory(key) {
            return this.factoryMap.get(key);
        }
    }
    // SubOne系列 产品
    class SubOneLogOne {
        printLog() {
            console.log('subone log one ...');
        }
    }
    class SubOneLogTwo {
        printLog() {
            console.log('subone log two ...');
        }
    }
    // SubTwo系列 产品
    class SubTwoLogOne {
        printLog() {
            console.log('subtwo log one ...');
        }
    }
    class SubTwoLogTwo {
        printLog() {
            console.log('subtwo log two ...');
        }
    }
    // 给抽象工厂添加 子工厂
    MyFactory.addFactory(FactoryName.MySubFactoryOne, MySubFactoryOne).addFactory(FactoryName.MySubFactoryTwo, MySubFactoryTwo);
    // 给子工厂添加要生产的产品
    MySubFactoryOne.addConsoleLog(ClassName.LogOne, new SubOneLogOne()).addConsoleLog(ClassName.LogTwo, new SubOneLogTwo());
    MySubFactoryTwo.addConsoleLog(ClassName.LogOne, new SubTwoLogOne()).addConsoleLog(ClassName.LogTwo, new SubTwoLogTwo());
    // 使用
    MyFactory.getFactory(FactoryName.MySubFactoryOne).getConsoleLog(ClassName.LogOne)?.printLog();
    MyFactory.getFactory(FactoryName.MySubFactoryOne).getConsoleLog(ClassName.LogTwo)?.printLog();
    MyFactory.getFactory(FactoryName.MySubFactoryTwo).getConsoleLog(ClassName.LogOne)?.printLog();
    MyFactory.getFactory(FactoryName.MySubFactoryTwo).getConsoleLog(ClassName.LogTwo)?.printLog();
})(creative_mode_02 || (creative_mode_02 = {}));
