<template>
    <div class="col-sm-12">

        <div class="col-sm-8">
            <table class="table table-striped table-responsive">
                <thead class="thead thead-default">
                <tr>
                    <th>尺寸</th>
                    <th>价格</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody v-for="item in getMenuItems">
                <tr>
                    <td colspan="3">{{item.name}}</td>
                </tr>
                <tr v-for="option in item.options">
                    <td>{{option.size}}寸</td>
                    <td>{{option.price}}￥</td>
                    <td>
                        <button class="btn btn-sm btn-ouline-success" @click="addBaskets(item, option)">+</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

        <div class="col-sm-4">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>数量</th>
                    <th>品种</th>
                    <th>价格</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in baskets">
                    <td>
                        <button class="btn btn-sm" @click="decrease(item)">-</button>
                        <span>{{item.quantity}}</span>
                        <button class="btn btn-sm" @click="add(item)">+</button>
                    </td>
                    <td>
                        {{item.name}}-{{item.size}}寸
                    </td>
                    <td>
                        {{item.quantity * item.price}}
                    </td>
                </tr>
                </tbody>
            </table>
            <p>总价：{{total}}</p>
        </div>
    </div>
</template>

<script>
    export default {

        data(){
            return {
                baskets: [],
//                getMenuItems: []
            }
        },
        computed: {
            getMenuItems: function () {
                return this.$store.state.getMenuItems;
            },

            total: function () {
                let totalPrice = 0;
                for (var i = 0; i < this.baskets.length; i++) {
                    totalPrice += this.baskets[i].quantity * this.baskets[i].price;
                }
                return totalPrice
            }

        },

        methods: {
            addBaskets(item, option){
                var basket = {}, baskets = [];
                basket.id = item.id;
                basket.name = item.name;
                basket.size = option.size;
                basket.price = option.price;
                basket.quantity = 1;

                if (this.baskets.length > 0) {
                    let result = this.baskets.filter(item => {
                        return item.name == basket.name && item.price == basket.price
                    })

                    if (result !== null && result.length > 0) {
                        result[0].quantity++;
                    } else {
                        this.baskets.push(basket)
                    }
                } else {
                    this.baskets.push(basket)
                }
            },

            decrease(item){
                item.quantity--;
                if (item.quantity == 0) {
                    this.removeFromBasket(item)
                }
            },

            removeFromBasket(item){
                this.baskets.splice(this.baskets.indexOf(item), 1)
            },

            add(item){
                item.quantity++;
            }
        },

        created: function () {

            this.http.get('/pizza').then(res => {
//                this.getMenuItems = res.data
                this.$store.commit('getMenus', res.data)
            })
        }
    }
</script>

<style>
</style>


