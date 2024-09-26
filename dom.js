class Item{
    constructor(item, price, picUrl){
        this.item = item;
        this.price = price;
        this.picUrl = picUrl;
    }  
}

//配列
const items = [
    new Item("かけうどん", "$20"),
    new Item("2", "きつねうどん", "$20"),
    new Item("6", "月見うどん", "$25"),
    new Item("8", "伊勢うどん", "$25"),
    new Item("3", "カレーうどん", "$30"),
    new Item("4", "サラダうどん（冷）", "$30"),
    new Item("12", "トマトうどん（冷）", "30"),
    new Item("9", "キムチうどん", "$30"),
    new Item("11", "豆乳チーズうどん", "40"),
    new Item("10", "豚の角煮うどん", "$40"),
    new Item("5", "牛肉うどん", "$50"),
    new Item("7", "シーフードうどん", "$50")
]

//
