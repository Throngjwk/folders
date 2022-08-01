var game = {
    coins:new Decimal(0),
    cps:new Decimal(0),
    cpc:new Decimal(1),
    clickCoin() {
        game.coins = game.coins.add(game.cpc)
    }
}

const app = new Vue({
    el: "#app",
    data: game,
    methods: "",
    computed: "",
    created:""
});