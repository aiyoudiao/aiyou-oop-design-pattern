namespace creative_mode_05 {

    // 登录功能接口
    interface Loginable {
        login(): void
    }

    // 产品类，懒加载
    class LoginForm implements Loginable {

        // 唯一的实例和构造函数都上锁
        private static instance?: LoginForm
        private constructor() { }

        login(): void {
            console.log('1.登录成功')
        }

        static getLoginInstance(): LoginForm {

            if (this.instance) {
                return this.instance
            }

            return this.instance = new LoginForm()
        }
    }

    // 产品类 预加载
    class LoginForm2 implements Loginable {

        // 唯一的实例和构造函数都上锁
        private static instance: LoginForm2 = new LoginForm2()
        private constructor() { }
        
        login(): void {
            console.log('2.登录成功')
        }

        static getLoginInstance(): LoginForm2 {
            return this.instance
        }
    }

    // 使用1
    const loginFormInstance = LoginForm.getLoginInstance() // 实例创建的时机在第一次获取实例时，第一次获取才会创建，
    loginFormInstance.login()

    // 使用2
    const loginForm2Instance = LoginForm2.getLoginInstance() // 实例创建的时机在这个LoginForm2的class被加载时
    loginForm2Instance.login()
}