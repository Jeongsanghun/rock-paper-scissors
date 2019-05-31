const gababo = require('..')

describe('validation check', () => {
  it('입력값 체크', () => {
    expect(gababo.validationInput('찌', ['가위', '바위', '보'])[0]).toBe(false)
  })

  it('입력값 오류시 메시지', () => {
    expect(gababo.validationInput('찌', ['가위', '바위', '보'])[1]).toBe(`가위,바위,보 중에 입력해주세요.`)
  })

  it('종료를 입력했을 때 메시지', () => {
    expect(gababo.validationInput('종료', ['가위', '바위', '보'])[1]).toBe(`종료합니다.`)
  })

  it('입력값 정상일 때', () => {
    expect(gababo.validationInput('가위', ['가위', '바위', '보'])[0]).toBe(true)
  })

  it('입력값 정상일 때 메시지', () => {
    expect(gababo.validationInput('가위', ['가위', '바위', '보'])[1]).toBe('통과')
  })
})

describe('who is winner?', () => {
  // ['가위','바위','보']
  it('가위는 보를 이깁니다.', () => {
    expect(gababo.winner(0, 2, 3)).toBe('승리')
  })

  it('가위는 바위에게 집니다.', () => {
    expect(gababo.winner(0, 1, 3)).toBe('패배')
  })

  it('가위는 가위와 비깁니다.', () => {
    expect(gababo.winner(0, 0, 3)).toBe('무승부')
  })

  it('바위는 보에게 집니다.', () => {
    expect(gababo.winner(1, 2, 3)).toBe('패배')
  })

  it('바위는 바위와 비깁니다.', () => {
    expect(gababo.winner(1, 1, 3)).toBe('무승부')
  })

  it('바위는 가위를 이깁니다.', () => {
    expect(gababo.winner(1, 0, 3)).toBe('승리')
  })

  it('보는 보와 비깁니다.', () => {
    expect(gababo.winner(2, 2, 3)).toBe('무승부')
  })

  it('보는 바위에게 이깁니다.', () => {
    expect(gababo.winner(2, 1, 3)).toBe('승리')
  })

  it('보는 가위에게 집니다.', () => {
    expect(gababo.winner(2, 0, 3)).toBe('패배')
  })
})

describe('가위 바위 보 테스트', () => {
  it('결과가 나와야 합니다.', () => {
    expect(gababo.main('가위', ['가위', '바위', '보']).results).toBeDefined()
  })

  it('결과는 승 무 패로 나와야합니다.', () => {
    expect(['승리', '무승부', '패배'].includes(gababo.main('가위', ['가위', '바위', '보']).results)).toBe(true)
  })

  it('종료를 입력해도 결과는 나와야합니다.', () => {
    expect(gababo.main('종료', ['가위', '바위', '보']).results).toBe('종료합니다.')
  })

  it('입력 값이 이상한 경우에도 결과는 나와야합니다.', () => {
    expect(gababo.main('블라블라', ['가위', '바위', '보']).results).toBe(`가위,바위,보 중에 입력해주세요.`)
  })
})
