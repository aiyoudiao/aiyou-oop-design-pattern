"use strict";
var action_mode_10;
(function (action_mode_10) {
    class Context {
        instructions = '';
        list = new Array();
        constructor(instructions) {
            this.instructions = instructions;
        }
        set(instructions) {
            this.instructions = instructions;
        }
        get() {
            return this.instructions;
        }
        pushExperssion(expression) {
            this.list.push(expression);
        }
        getList() {
            return this.list;
        }
    }
    // 解释器1：非终结表达式类
    class NonterminalExpression {
        map = new Map();
        constructor(map) {
            this.map = map;
        }
        interpret(context) {
            const instructions = context.get();
            let newInstructions = '';
            let result = '';
            for (const text of instructions) {
                if (this.map.has(text)) {
                    result += this.map.get(text);
                    // console.log(`解释：${text} 答案为：${this.map.get(text)}`)
                }
                else {
                    newInstructions += text;
                }
            }
            context.set(newInstructions);
            if (result) {
                console.log(`解释器解释完毕：答案为：${result}`);
            }
        }
    }
    // 解释器2：终结表达式类
    class TerminalExpression {
        startflag;
        endflag;
        constructor(startflag, endFlag) {
            this.startflag = startflag;
            this.endflag = endFlag;
        }
        interpret(context) {
            const instructions = context.get();
            const startIndex = instructions.indexOf(this.startflag);
            const startLength = this.startflag.length;
            const endIndex = instructions.indexOf(this.endflag);
            const endLength = this.endflag.length;
            let newInstructions = '';
            if (startIndex !== -1 && endIndex !== -1) {
                newInstructions = instructions.slice(startIndex + startLength, endIndex + endLength);
            }
            if (startIndex === -1 && endIndex !== -1) {
                newInstructions = instructions.slice(0, endIndex + endLength);
            }
            else if (startIndex !== -1 && endIndex === -1) {
                newInstructions = instructions.slice(startIndex + startLength);
            }
            else {
                newInstructions = instructions;
            }
            context.set(newInstructions);
        }
    }
    // 使用1
    const context = new Context('$wwssaaddABABAABBBBAAq');
    const terminalExpression = new TerminalExpression('$', 'q');
    const map1 = new Map()
        .set('w', '上').set('s', '下')
        .set('a', '左').set('d', '右')
        .set('A', '攻击').set('B', '防御');
    const nonterminalExpression = new NonterminalExpression(map1);
    context.pushExperssion(terminalExpression);
    context.pushExperssion(nonterminalExpression);
    context.getList().forEach(expression => {
        expression.interpret(context);
    });
    // 再来一把
    context.set('$wsadABsdwaBAAAAAAAAAABBBBBBBBBB');
    context.getList().forEach(expression => {
        expression.interpret(context);
    });
})(action_mode_10 || (action_mode_10 = {}));
