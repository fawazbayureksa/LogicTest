const onCountChange = (money = 100, price = 75) => {
    let change = money - price

    let changeMoney = { 100: 0, 50: 0, 20: 0, 10: 0, 5: 0, 1: 0 }
    while (change > 0) {
        if (change >= 100) {
            changeMoney[100] += 1
            change -= 100
        } else if (change >= 50) {
            changeMoney[50] += 1
            change -= 50
        } else if (change >= 20) {
            changeMoney[20] += 1
            change -= 20
        } else if (change >= 10) {
            changeMoney[10] += 1
            change -= 10
        } else if (change >= 5) {
            changeMoney[5] += 1
            change -= 5
        } else {
            changeMoney[1] += change
            change = 0
        }
    }
    return changeMoney
}

console.log(onCountChange())