namespace action_mode_10 {

    interface IExpression {

        interpret(context: Context): void

    }

    class Context {

        private instructions: string = ''
        private list: Array<IExpression> = new Array()

        constructor(instructions: string) {
            this.instructions = instructions
        }

        set(instructions: string) {
            this.instructions = instructions
        }

        get(): string {
            return this.instructions
        }

        pushExperssion (expression: IExpression) {
            this.list.push(expression)
        }

        getList() {
            return this.list
        }

    }

    // 解释器1：非终结表达式类
    class NonterminalExpression implements IExpression {

        private map: Map<string, string> = new Map()

        constructor(map: Map<string, string>) {
            this.map = map
        }

        interpret(context: Context): void {
            const instructions = context.get()
            let newInstructions = ''
            let result = ''

            for (const text of instructions) {
                if (this.map.has(text)) {
                    result += this.map.get(text)
                    // console.log(`解释：${text} 答案为：${this.map.get(text)}`)
                } else {
                    newInstructions += text
                }
            }

            context.set(newInstructions)
            if (result) {
                console.log(`解释器解释完毕：答案为：${result}`)
            }
        }
    }

    // 解释器2：终结表达式类
    class TerminalExpression implements IExpression {

        private startflag: string
        private endflag: string

        constructor(startflag: string, endFlag: string) {
            this.startflag = startflag
            this.endflag = endFlag
        }

        interpret(context: Context): void {
            const instructions = context.get()

            const startIndex = instructions.indexOf(this.startflag)
            const startLength = this.startflag.length
            const endIndex = instructions.indexOf(this.endflag)
            const endLength = this.endflag.length

            let newInstructions = ''

            if (startIndex !== -1 && endIndex !== -1) {
                newInstructions = instructions.slice(startIndex + startLength, endIndex + endLength)
            } if (startIndex === -1 && endIndex !== -1) {
                newInstructions = instructions.slice(0, endIndex + endLength)
            } else if (startIndex !== -1 && endIndex === -1) {
                newInstructions = instructions.slice(startIndex + startLength)
            } else {
                newInstructions = instructions
            }

            context.set(newInstructions)
        }

    }

    // 使用1
    const context = new Context('$wwssaaddABABAABBBBAAq')
    const terminalExpression = new TerminalExpression('$', 'q')
    const map1 = new Map()
    .set('w', '上').set('s', '下')
    .set('a', '左').set('d', '右')
    .set('A', '攻击').set('B', '防御')
    const nonterminalExpression = new NonterminalExpression(map1)

    context.pushExperssion(terminalExpression)
    context.pushExperssion(nonterminalExpression)
    context.getList().forEach(expression => {
        expression.interpret(context)
    })

    // 再来一把
    context.set('$wsadABsdwaBAAAAAAAAAABBBBBBBBBB')
    context.getList().forEach(expression => {
        expression.interpret(context)
    })

}