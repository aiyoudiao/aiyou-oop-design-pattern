"use strict";
var creative_mode_05;
(function (creative_mode_05) {
    // 产品类，懒加载
    class LoginForm {
        // 唯一的实例和构造函数都上锁
        static instance;
        constructor() { }
        login() {
            console.log('1.登录成功');
        }
        static getLoginInstance() {
            if (this.instance) {
                return this.instance;
            }
            return this.instance = new LoginForm();
        }
    }
    // 产品类 预加载
    class LoginForm2 {
        // 唯一的实例和构造函数都上锁
        static instance = new LoginForm2();
        constructor() { }
        login() {
            console.log('2.登录成功');
        }
        static getLoginInstance() {
            return this.instance;
        }
    }
    // 使用1
    const loginFormInstance = LoginForm.getLoginInstance(); // 实例创建的时机在第一次获取实例时，第一次获取才会创建，
    loginFormInstance.login();
    // 使用2
    const loginForm2Instance = LoginForm2.getLoginInstance(); // 实例创建的时机在这个LoginForm2的class被加载时
    loginForm2Instance.login();
})(creative_mode_05 || (creative_mode_05 = {}));
