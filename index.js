function validationInput(input, answerGroup) {
    if (input === '종료') {
        return [false, '종료합니다.']
    }

    if (!answerGroup.includes(input)) {
        return [false, `${answerGroup.join(',')} 중에 입력해주세요.`]
    }
    return [true, '통과']
}

function winner(inputIdx, outputIdx, answerLength) {
    var results = ''
    if (outputIdx === 0 && inputIdx === (answerLength - 1)) {
        inputIdx = -1
    } else if (outputIdx === (answerLength - 1) && inputIdx === 0) {
        outputIdx = -1
    }
    if (inputIdx > outputIdx) {
        results = '승리'
    } else if (inputIdx === outputIdx) {
        results = '무승부'
    } else {
        results = '패배'
    }
    return results
}

function main(input, answerGroup) {
    var output = {
        input: input,
        answerGroup: answerGroup,
        output: '',
        results: ''
    }
    var validationCheck = validationInput(input, answerGroup)
    if (!validationCheck[0]) {
        output.results = validationCheck[1]
    } else {
        var outputIdx = Math.floor(Math.random() * answerGroup.length)
        var inputIdx = answerGroup.indexOf(input)

        output.output = answerGroup[outputIdx]
        output.results = winner(inputIdx, outputIdx, answerGroup.length)
    }
    return output
}



module.exports = {
    main,
    validationInput,
    winner
}