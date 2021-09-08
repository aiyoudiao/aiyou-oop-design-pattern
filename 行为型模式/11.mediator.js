"use strict";
var action_mode_11;
(function (action_mode_11) {
    class Tenant {
        name;
        typeName = '租客';
        mediator;
        constructor(name, mediator) {
            this.name = name;
            this.mediator = mediator;
        }
        buy(user) {
            this.mediator.buy(this, user);
        }
    }
    class HouseOwner {
        name;
        typeName = '房东';
        mediator;
        constructor(name, mediator) {
            this.name = name;
            this.mediator = mediator;
        }
        sell(user) {
            this.mediator.sell(this, user);
        }
    }
    class Mediator {
        buy(user1, user2) {
            console.log(`${user1.name}(${user1.typeName}):我要租房子`);
            console.log(`${user2.name}(${user2.typeName}):我要出租房子`);
        }
        sell(user1, user2) {
            console.log(`${user1.name}(${user1.typeName}):我要出租房子`);
            console.log(`${user2.name}(${user2.typeName}):我要租房子`);
        }
    }
    const mediator = new Mediator();
    const tenant1 = new Tenant('小明', mediator);
    const houseOwner = new HouseOwner('老王', mediator);
    tenant1.buy(houseOwner);
    houseOwner.sell(tenant1);
})(action_mode_11 || (action_mode_11 = {}));
