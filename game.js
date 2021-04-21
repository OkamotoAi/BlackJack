
//ディーラーとプレイヤー全員に２枚ずつカードが配られる
function init() {
    let mycost = 0
    let mycard = []
    let dealcost = 0

    distribution()
    distribution()

    calc()
}

//カードを1枚配る
function distribution() {
    let newcard = Math.floor(Math.random() * 13)
    mycard.push(newcard)
    console.log("手札に" + newcard + "を追加しました")
}

//自分のカードの合計値が21に近づくよう、カードを追加したり、追加しないかを決める
function hit() {
    distribution()
}

function stand() {

}

//カードの合計値が21を超えてしまった時点で、その場で負けが確定する
//プレイヤーはカードの合計値が21を超えない限り、好きなだけカードを追加できる

function calc(num) {
    if(num == 1){
        
    }else if()
}




//ディーラーはカードの合計値が17を超えるまでカードを追加する

