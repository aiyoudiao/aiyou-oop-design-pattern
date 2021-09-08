"use strict";
var struct_mode_05;
(function (struct_mode_05) {
    // 顾客：操作对象
    class Guest {
        name;
        isAccept = false;
        constructor(name) {
            this.name = name;
        }
    }
    // 工人：元素
    class Worker {
        name;
        isWorker = false;
        constructor(name) {
            this.name = name;
        }
        work(guest) {
            console.log(`${this.name}正在服务${guest}`);
        }
    }
    // 餐厅：享元工厂
    class DiningRoom {
        workerList = [];
        recruit(worker) {
            this.workerList.push(worker);
            return this;
        }
        work(guest) {
            const obj = this.workerList.find(item => !item.isWorker);
            if (obj) {
                obj.isWorker = true;
                guest.isAccept = true;
                obj.work(guest.name);
                setTimeout(() => {
                    obj.isWorker = false;
                }, 3000 * Math.random());
            }
            else {
                console.log('已没有工人可以提供服务，客户' + guest.name + ' 请稍等。。。 ');
                setTimeout(() => {
                    this.work(guest);
                }, 3000 * Math.random());
            }
            return this;
        }
    }
    // 使用
    // 餐厅招人
    const diningRoom = new DiningRoom();
    Array(12).fill(true).forEach((item, itemIndex) => {
        diningRoom.recruit(new Worker('工人' + itemIndex));
    });
    // 客人扎堆
    const guestList = Array(30).fill(true).map((item, itemIndex) => {
        return new Guest('客人' + itemIndex);
    }).sort(() => Math.random() - 0.5);
    // 一堆客人进入餐厅接受服务
    guestList.forEach(guest => {
        diningRoom.work(guest);
    });
    // 轮询判断所有客户是否已经全部接受服务
    let acceptId = setInterval(() => {
        const acceptGuest = guestList.filter(guest => guest.isAccept);
        if (acceptGuest.length === guestList.length) {
            console.log('所有顾客接受服务完毕！！！！！');
            clearInterval(acceptId);
        }
    }, 1000);
})(struct_mode_05 || (struct_mode_05 = {}));
