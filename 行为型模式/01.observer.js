"use strict";
var action_mode_01;
(function (action_mode_01) {
    // 票
    class Ticket {
        id;
        position;
        state;
        user = '';
        price;
        constructor(id, position) {
            this.id = id;
            this.position = position;
            this.price = ~~(Math.random() * 1000);
            this.state = false;
        }
        // 买票，返回是否购买成功的状态
        buy() {
            if (this.isBuy()) {
                return false;
            }
            this.state = true;
            return this.state;
        }
        isBuy() {
            return this.state;
        }
    }
    // 目标：电影院卖票
    class Cinema {
        ticketBuyerList = [];
        ticketList = [];
        addTicketBuyer(ticketBuyer) {
            this.ticketBuyerList.push(ticketBuyer);
        }
        constructor() {
            // 初始化十张电影票
            for (let i = 0; i < 10; i++) {
                const id = String(~~(1000000000 * Math.random()));
                const position = String(i);
                const ticket = new Ticket(id, position);
                this.ticketList.push(ticket);
            }
        }
        startSell() {
            this.ticketBuyerList.forEach(item => {
                item.buyTicket(~~(Math.random() * 1000));
            });
            const tempList = this.ticketList.filter(item => item.isBuy());
            if (tempList.length === this.ticketList.length) {
                console.log('======================================');
                console.log('============⭐⭐⭐⭐⭐⭐===========');
                console.log('本场电影票已卖完，买票成功的人员名单如下：');
                console.log('============⭐⭐⭐⭐⭐⭐===========');
                console.log('======================================');
                tempList.forEach(item => {
                    console.log(`票号：${item.id} 位置：${item.position} 买主是：${item.user}`);
                });
                return true;
            }
            return false;
        }
        sellTicket(ticketBuyer, money) {
            ticketBuyer.isBuy = false;
            this.ticketList.forEach(item => {
                // 价格低或者本轮已经买过了
                if (money >= item.price && !ticketBuyer.isBuy) {
                    const result = item.buy();
                    // 购买成功
                    if (result) {
                        ticketBuyer.isBuy = true;
                        ticketBuyer.mytickets.push(item);
                        item.user = ticketBuyer.name;
                        console.log(item.user + ' 买票成功! 票号是：' + item.id + ' 位置是：' + item.position);
                    }
                    else {
                        // 购买失败
                        console.log('票号：' + item.id + ' 位置：' + item.position + '，买主：' + item.user + ' 买票失败! ');
                    }
                }
            });
        }
    }
    // 观察者：买票黄牛
    class TicketBuyer {
        name;
        cinema;
        isBuy = false;
        mytickets = [];
        constructor(cinema, name) {
            this.cinema = cinema;
            this.name = name;
            // this.cinema.addTicketBuyer(this) // 也可以在这里添加让目标把观察者添加进去
        }
        // 买票
        buyTicket(money) {
            this.cinema.sellTicket(this, money);
        }
    }
    // 使用
    const cinema = new Cinema();
    for (let i = 0; i < 99; i++) {
        const t = new TicketBuyer(cinema, '黄牛' + i + '号');
        cinema.addTicketBuyer(t);
    }
    let result = cinema.startSell();
    while (!result) {
        result = cinema.startSell();
    }
})(action_mode_01 || (action_mode_01 = {}));
