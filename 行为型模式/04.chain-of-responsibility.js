"use strict";
var action_mode_04;
(function (action_mode_04) {
    class GroupLeader {
        leaveDays = 2;
        borrowMoney = 1500;
        approval(name, leaveDays, borrowMoney) {
            console.log(`
                ${name}：请假${leaveDays}天，借钱${borrowMoney}元。
            `);
            console.log(`审批到达项目组长
            组长最大权限：支持请假${this.leaveDays}天和借钱${this.borrowMoney}元。
            `);
            return this.leaveDays >= leaveDays && this.borrowMoney >= borrowMoney;
        }
    }
    class ProjectManager {
        leaveDays = 7;
        borrowMoney = 5000;
        approval(name, leaveDays, borrowMoney) {
            console.log(`
                ${name}：请假${leaveDays}天，借钱${borrowMoney}元。
            `);
            console.log(`审批到达项目经理
            PM最大权限：支持请假${this.leaveDays}天或借钱${this.borrowMoney}元。
            `);
            // 请假 和 借钱 只能二选一
            if (leaveDays > 1 && borrowMoney > 1) {
                return false;
            }
            return this.leaveDays >= leaveDays && this.borrowMoney >= borrowMoney;
        }
    }
    class CEO {
        leaveDays = 30;
        borrowMoney = 25000;
        approval(name, leaveDays, borrowMoney) {
            console.log(`
                ${name}：请假${leaveDays}天，借钱${borrowMoney}元。
            `);
            console.log(`审批到达首席执行董事长
            CEO最大权限：支持请假${this.leaveDays}天和借钱${this.borrowMoney}元。
            `);
            return this.leaveDays >= leaveDays && this.borrowMoney >= borrowMoney;
        }
    }
    class Chain {
        currentTask;
        nextTaskChain;
        constructor(task) {
            this.currentTask = task;
            this.nextTaskChain = null;
        }
        setNext(nextTask) {
            this.nextTaskChain = new Chain(nextTask);
            return this.nextTaskChain;
        }
        approvalHandler(name, leaveDays, borrowMoney) {
            let result = this.currentTask.approval(name, leaveDays, borrowMoney);
            if (result) {
                console.log(' ################# 操作成功！！！！！ ################# ');
                return;
            }
            if (this.nextTaskChain) {
                console.log(' ================= 权限不足，开启下一个审批流程 ================= ');
                this.nextTaskChain.approvalHandler(name, leaveDays, borrowMoney);
            }
            else {
                console.log(' ################# 操作失败！！！！！ ################# ');
            }
        }
    }
    const groupLeaderChainNode = new Chain(new GroupLeader());
    groupLeaderChainNode.setNext(new ProjectManager()).setNext(new CEO());
    groupLeaderChainNode.approvalHandler('员工小梦', 1, 200);
    groupLeaderChainNode.approvalHandler('员工小李', 10, 200);
    groupLeaderChainNode.approvalHandler('员工老李', 25, 50000);
})(action_mode_04 || (action_mode_04 = {}));
