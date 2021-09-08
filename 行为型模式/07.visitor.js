"use strict";
var action_mode_07;
(function (action_mode_07) {
    // 访问者：老师A
    class TecherA {
        name;
        constructor(name) {
            this.name = name;
        }
        visit(student) {
            if (student.type === '好学生') {
                console.log(this.name + '很开心，和好学生的父母谈笑风生。');
            }
            else if (student.type === '坏学生') {
                console.log(this.name + '很尴尬，安慰坏学生的父母要多陪陪孩子。');
            }
            else {
                console.log(this.name + '正常的和学生父母进行交流。');
            }
        }
    }
    // 好学生
    class GoodStudent {
        name;
        type;
        constructor(name) {
            this.name = name;
            this.type = '好学生';
        }
        accep(techer) {
            techer.visit(this);
        }
    }
    // 坏学生
    class BadStudent {
        name;
        type;
        constructor(name) {
            this.name = name;
            this.type = '坏学生';
        }
        accep(techer) {
            techer.visit(this);
        }
    }
    // 普通学生
    class NormalStudent {
        name;
        type;
        constructor(name) {
            this.name = name;
            this.type = '普通学生';
        }
        accep(techer) {
            techer.visit(this);
        }
    }
    // 访问者A
    const techerA = new TecherA('女老师');
    const goodStudent = new GoodStudent('好学生-夏雪');
    const badStudent = new BadStudent('坏学生-刘星');
    const normalStudent = new NormalStudent('普通学生-夏雨');
    // 未改变数据结构，直接通过访问者扩展了行为
    goodStudent.accep(techerA);
    badStudent.accep(techerA);
    normalStudent.accep(techerA);
    // 再来一个
    class TecherB {
        name;
        constructor(name) {
            this.name = name;
        }
        visit(student) {
            if (student.type === '好学生') {
                console.log(this.name + '很开心，和好学生的父母谈笑风生。');
            }
            else if (student.type === '坏学生') {
                console.log(this.name + '很开心，说坏学生很有天分，在数学方面很有前途。');
            }
            else {
                console.log(this.name + '很开心的和学生父母进行交流。');
            }
        }
    }
    // 访问者B
    const techerB = new TecherB('金牌老师');
    goodStudent.accep(techerB);
    badStudent.accep(techerB);
    normalStudent.accep(techerB);
})(action_mode_07 || (action_mode_07 = {}));
