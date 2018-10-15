<template>
    <div id="" class="col-sm-12">
        <div class="well">


            <h3 class="page-header">登录</h3>

            <form @submit="submitForm">
                <div class="form-group">
                    <label for="name">用户名</label>
                    <input type="text" class="form-control" id="name" placeholder="用户名" v-model="user.name">
                </div>
                <div class="form-group">
                    <label for="password">密码</label>
                    <input type="password" class="form-control" id="password" placeholder="密码" v-model="user.password">
                </div>

                <div class="form-group">
                    <button type="submit" class="form-control btn btn-primary">登录</button>
                </div>

            </form>

        </div>
    </div>
</template>

<script>

    export default {
        name: 'login',
        data(){
            return {
                user: {}
            }
        },

        beforeRouteEnter: (to, from, next) =>{
            next(vm => vm.$store.commit('setUser', null))
        },
        methods: {
            submitForm(e){
                e.preventDefault()
                this.http.get('/users').then(res => {
                    var data = res.data;
                    var result = data.filter((item, index) => {
                        return item.name == this.user.name && item.password == this.user.password
                    })

                    if (result != null && result.length > 0) {
                        this.$store.commit('setUser', result[0].name)
                        this.$router.push('/')
                    }

                })
            }
        }


    }
</script>


