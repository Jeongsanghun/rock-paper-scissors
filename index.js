const readline = require('readline')
const gababo = require('./gababo')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var answerGroup = ['가위', '바위', '보']
console.log(`준비가 되면 '시작' 이라고 입력해주세요.`)
rl.on('line', (what) => {
    if (what === '시작') {
        rl.question(`${answerGroup.join('')}! => `, (answer) => {
            var results = gababo.main(answer, answerGroup)
            if (results.results === '종료합니다.') {
                rl.close()
            } else {
                console.log(`${results.input} vs. ${results.output} => ${results.results}`)
            }
        })
    } else if (what === '종료') {
        rl.close()
    }
})