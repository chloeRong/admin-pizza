<template>
    <div id="admin" class="col-sm-12">

        <div class="col-sm-8">
            <new-pizza></new-pizza>
        </div>

        <div class="col-sm-4">
            <h2>菜单</h2>
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>品种</th>
                    <th>删除</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in getMenuItems" :key="item.name">
                    <td>{{item.name}}</td>
                    <td>
                        <button type="button" class="btn btn-sm" @click="deleteMenu(item)">X</button>
                    </td>
                </tr>
                </tbody>

            </table>
        </div>
    </div>
</template>

<script>

    import NewPizza from './NewPizza.vue'

    export default {
        name: 'admin',
        data(){
            return {
//                getMenuItems: {}
            }
        },
        computed: {
            getMenuItems: function(){
                return this.$store.state.getMenuItems
            }
        },
        components: {
            NewPizza
        },
        methods: {
            getMenu(){
                this.http.get('/pizza').then(res => {

//                    thisgetMenuItems = res.data;
                    this.$store.commit('getMenus', res.data)
                })
            },
            deleteMenu(item){
                this.http.delete('/pizza/'+item.id).then(res =>{
                    this.getMenu()
                })

//                fetch('http://localhost:3000/pizza/' + item.id, {
//                    method: 'DELETE',
//                    headers: {
//                        'Content-type': 'application/json'
//                    }
//                }).then(res => {
//                    console.log(res)
//                    res.json()
//                }).then(data => console.log(data))
////                                    .then(data => this.$router.push({name: "homeLink"}))
////                    .then(data => this.$store.commit('deleteMenuItem', data))
//                    .catch(err => console.log(err))
            }

        },
        created: function () {
            this.getMenu()
        }
    }
</script>


