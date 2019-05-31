# rock-paper-scissors [![npm version](https://badge.fury.io/js/rock-paper-scissors-shj.svg)](https://badge.fury.io/js/rock-paper-scissors-shj)

가위바위보를 하고 싶어요.



## 설치방법

```bash
npm install --save rock-paper-scissors-shj

# 또는

yarn add rock-paper-scissors-shj
```

## 사용방법

```javascript
const RPS = require('rock-paper-scissors-shj')
const RULES = ['가위', '바위', '보']
const answer = '가위'
const result = RPS.main(answer, RULES)
```

## 테스트

```
npm test
```


## 기여 방법

fork후 Pull Request를 남겨주세요
