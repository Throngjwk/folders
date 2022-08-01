Vue.component("app", {
    data: function()
    {
        return {
            game: game
        }
    },
    template: `<div class="aleph-layer">
<h1>You Have {{game.coins}} Coins.</h1>
<button @click="game.clickCoin()"></button>
</div>`
})