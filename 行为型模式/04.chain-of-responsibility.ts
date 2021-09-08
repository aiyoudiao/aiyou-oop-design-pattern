namespace action_mode_04 {

    interface IApproval {

        leaveDays: number
        borrowMoney: number
        approval(name: string, leaveDays: number, borrowMoney: number): boolean
    }


    class GroupLeader implements IApproval {

        leaveDays: number = 2
        borrowMoney: number = 1500

        approval(name: string, leaveDays: number, borrowMoney: number): boolean {
            console.log(`
                ${name}：请假${leaveDays}天，借钱${borrowMoney}元。
            `)
            console.log(`审批到达项目组长
            组长最大权限：支持请假${this.leaveDays}天和借钱${this.borrowMoney}元。
            `)
            return this.leaveDays >= leaveDays && this.borrowMoney >= borrowMoney
        }
    }

    class ProjectManager implements IApproval {

        leaveDays: number = 7
        borrowMoney: number = 5000

        approval(name: string, leaveDays: number, borrowMoney: number): boolean {
            console.log(`
                ${name}：请假${leaveDays}天，借钱${borrowMoney}元。
            `)
            console.log(`审批到达项目经理
            PM最大权限：支持请假${this.leaveDays}天或借钱${this.borrowMoney}元。
            `)

            // 请假 和 借钱 只能二选一
            if (leaveDays > 1 && borrowMoney > 1) {
                return false
            }

            return this.leaveDays >= leaveDays && this.borrowMoney >= borrowMoney
        }
    }

    class CEO implements IApproval {

        leaveDays: number = 30
        borrowMoney: number = 25000

        approval(name: string, leaveDays: number, borrowMoney: number): boolean {
            console.log(`
                ${name}：请假${leaveDays}天，借钱${borrowMoney}元。
            `)
            console.log(`审批到达首席执行董事长
            CEO最大权限：支持请假${this.leaveDays}天和借钱${this.borrowMoney}元。
            `)

            return this.leaveDays >= leaveDays && this.borrowMoney >= borrowMoney
        }

    }

    class Chain {

        currentTask: IApproval
        nextTaskChain?: Chain | null

        constructor(task: IApproval) {
            this.currentTask = task
            this.nextTaskChain = null
        }


        setNext(nextTask: IApproval): Chain {
            this.nextTaskChain = new Chain(nextTask)
            return this.nextTaskChain
        }

        approvalHandler(name: string, leaveDays: number, borrowMoney: number): void {
            let result = this.currentTask.approval(name, leaveDays, borrowMoney)
            if (result) {
                console.log(' ################# 操作成功！！！！！ ################# ')
                return
            }

            if (this.nextTaskChain) {
                console.log(' ================= 权限不足，开启下一个审批流程 ================= ')
                this.nextTaskChain.approvalHandler(name, leaveDays, borrowMoney)
            } else {
                console.log(' ################# 操作失败！！！！！ ################# ')
            }
        }
    }

    const groupLeaderChainNode = new Chain(new GroupLeader())
    groupLeaderChainNode.setNext(new ProjectManager()).setNext(new CEO())

    groupLeaderChainNode.approvalHandler('员工小梦', 1, 200)

    groupLeaderChainNode.approvalHandler('员工小李', 10, 200)

    groupLeaderChainNode.approvalHandler('员工老李', 25, 50000)
}
