"use strict";
var action_mode_11_2;
(function (action_mode_11_2) {
    class Tenant {
        name;
        typeName = '租客';
        mediator;
        constructor(name, mediator) {
            this.name = name;
            this.mediator = mediator;
            this.mediator.tenantList.push(this);
        }
        buy() {
            this.mediator.buy(this);
        }
    }
    class HouseOwner {
        name;
        typeName = '房东';
        mediator;
        constructor(name, mediator) {
            this.name = name;
            this.mediator = mediator;
            this.mediator.houseOwnerList.push(this);
        }
        sell() {
            this.mediator.sell(this);
        }
    }
    class Mediator {
        tenantList = new Array();
        houseOwnerList = new Array();
        buy(user1) {
            console.log(`${user1.name}(${user1.typeName}):我要租房子`);
            this.houseOwnerList.forEach(houseOwner => {
                console.log(`${houseOwner.name}(${houseOwner.typeName}):我要出租房子`);
            });
        }
        sell(user1) {
            console.log(`${user1.name}(${user1.typeName}):我要出租房子`);
            this.tenantList.forEach(tenant => {
                console.log(`${tenant.name}(${tenant.typeName}):我要租房子`);
            });
        }
    }
    const mediator = new Mediator();
    const tenant1 = new Tenant('小明', mediator);
    const tenant2 = new Tenant('小黄', mediator);
    const tenant3 = new Tenant('大正', mediator);
    const houseOwner1 = new HouseOwner('老王头', mediator);
    const houseOwner2 = new HouseOwner('老李头', mediator);
    const houseOwner3 = new HouseOwner('老张头', mediator);
    tenant1.buy();
    houseOwner1.sell();
})(action_mode_11_2 || (action_mode_11_2 = {}));
