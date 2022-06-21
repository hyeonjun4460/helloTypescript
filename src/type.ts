// 기본 타입 설정(문자, 숫자, boolean, 배열, 튜플)
// 설정된 타입과 다른 타입을 변수에 할당하려고 하면 에러가 인식된다.
let car:string = 'bmw' //타입을 설정하지 않아도, 타입의 형태를 인식한다.
let boolean = true
let boolean2:boolean

let a:number[] = [1,2,3] // 배열에 들어갈 값의 타입을 지정할 수 있다.
let b:string[] = ['a', 'b']
let a2:Array<number> = [2,3,4]
let b2:Array<string> = ['a', 'b']
let c:[string, number] // 배열 각 인덱스값의 타입을 지정할 수 있다. 
c = ['1', 1] 

// 함수: void, never

// 1. void: 함수에 특정한 반환값이 없을 때 사용하는 타입
function sayHello():void{
    console.log('hello')
}

// 2. never: 항상 에러를 반환하는 함수, 무한순환하는 함수에 사용하는 타입
function showError():never{
    throw new Error()
}

function infLoop():never{
    while(true){
        console.log('hi')
    }
}

// enum: 서로 연관된 상수들의 집합 타입
// enum에 속한 상수에는 값을 할당할 수 있다.
// 특정 값만 입력 가능하도록 강제하고자 할 때 많이 이용된다. 특정 변수가 enum 타입으로 지정되면 enum에 포함된 상수만 이용된다.

enum Os {
    Window,
    Ios,
    Android
}

// null, undefined
let x:null = null
let y:undefined = undefined

