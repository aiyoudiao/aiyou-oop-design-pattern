namespace creative_mode_01 {

    // 子类枚举
    enum ClassName {
        LogOne,
        LogTwo
    }

    // 打印日志
    interface IConsoleLog {
        printLog(): void
    }

    // 工厂类
    class MyFactory {

        static map: Map<ClassName, IConsoleLog> = new Map();

        static addConsoleLog(key: ClassName, value: IConsoleLog) {
            this.map.set(key, value)

            return this
        }

        static getConsoleLog(key: ClassName) {
            return this.map.get(key)
        }

    }

    // 子类的实现 

    class LogOne implements IConsoleLog {
        printLog(): void {
            console.log('log one 。。。')
        }
    }

    class LogTwo implements IConsoleLog {
        printLog(): void {
            console.log('log two 。。。')
        }
    }

    // 给这个工厂添加产品
    MyFactory.addConsoleLog(ClassName.LogOne, new LogOne()).addConsoleLog(ClassName.LogTwo, new LogTwo());


    // 从工厂中拿出对象来使用
    MyFactory.getConsoleLog(ClassName.LogOne)?.printLog()
    MyFactory.getConsoleLog(ClassName.LogTwo)?.printLog()

}