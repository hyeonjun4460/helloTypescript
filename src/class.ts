// JS와 TS의 class 사용 차이

// 1. ts는 color 변수과 그것의 타입을 먼저 선언해야한다. 혹은 접근제한자나 readonly 키워드를 이용해야한다.

class Car11 {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log("car");
  }
}
const bmw2 = new Car11("red");

// TS는 다른 객체지향언어와 달리 접근제한자나 readonly를 지원하지 않는 JS ES6와 다르게 이를 지원함
// ** 접근제한자
// 1) public
// => 객체의 default 상태.
//  public으로 선언된 변수나 메소드는 자식 클래스와 클래스 인스턴스에서 모두 사용 가능함.
// 2) private
// => 자식 클래스, 클래스 인스턴스에서 참조 불가능
// 3) protected
// => 자식 클래스에서 접근이 가능하지만, 클래스 인스턴스에서는 참조할 수 없는 변수(보안 목적으로 선언하면 좋을 듯)
//  4) readonly 키워드
// => 해당 변수를 수정할 수 없게 하는 설정
// 5) static property
// => 정적 멤버변수를 생성하는 것으로, 이를 활용할 때는 this가 아니라 클래스명 그 자체를 사용한다.
class team {
  private boss: string = "보스"; // 참조: 자식 X, 인스턴스 X
  public name: string; // 참조: 자식 O, 인스턴스 O
  protected manager: string = "현준22"; // 참조: 자식 O, 인스턴스 X
  static memberNum: number = 5;
  readonly foundationDay: number = 1900;
  constructor(team: string) {
    this.name = team;
  }
  do() {
    console.log(this.boss);
    console.log(team.memberNum); // static이므로 클래스명으로
  }
}

class baseball extends team {
  constructor(team: string) {
    super(team);
  }
  baseball() {
    console.log(this.manager);
    // console.log(this.boss) // 부모 클래스에서 멤버변수 boss가 private이므로 자식에서 참조불가
    console.log(this.manager); // protected는 자식 클래스에서 참조 가능
    // console.log(this.boss) // private 설정 시, 상속은 이루어져 property는 가지지만 참조해서 변경하지는 못함
  }
}

const eagles = new team("aa");
const tigers = new baseball("bb");

// console.log(eagles.boss, eagles.manager); // private/protected이므로 인스턴스는 참조 불가능
console.log(eagles.name);
eagles.name = "돼지쓰";
console.log(eagles.name); // public은 인스턴스에서 참조 및 변경 가능
// eagles.foundationDay = 1855; // readonly여서 수정 불가능
eagles.do();

console.log(tigers.baseball());

// 추상 (abstract)
// new를 이용해서 새 인스턴스를 만들 수 없는 클래스로 오직 상속으로만 활용 가능한 클래스
// 멤버변수, method도 추상화시킬 수 잇음.
// 멤버변수/메소드의 타입, 이름만 설정하고 구체적인 기능이나 내용은 상속받는 곳에서 정의해야함.
// 추상클래스라도 메소드 추상화는 별도로 해줘야함.
abstract class soccerTeam {
  teamName: string;
  memberNum: number;
  constructor(name: string, num: number) {
    this.teamName = name;
    this.memberNum = num;
  }
  start() {
    console.log("soccer team");
  }
  abstract do(): void;
}

// const MU = new soccerTeam('MU', 5) // 추상 클래스는 곧바로 인스턴스로 생성 불가

class mu extends soccerTeam {
  constructor(name: string, num: number) {
    super(name, num);
  }
  do() {
    console.log(this.memberNum);
  }
}
const MU = new mu("mu", 5);

console.log(MU.teamName, MU.memberNum);
MU.do();
