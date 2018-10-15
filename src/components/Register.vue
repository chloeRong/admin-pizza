<template>
    <div id="register">
        <div id="" class="col-sm-12">
            <div class="well">


                <h3 class="page-header">注册</h3>

                <form @submit="formSubmit">
                    <div class="form-group">
                        <label for="name">用户名</label>
                        <input type="text" class="form-control" id="name" placeholder="用户名" v-model="user.name">
                    </div>
                    <div class="form-group">
                        <label for="password">密码</label>
                        <input type="password" class="form-control" id="password" placeholder="密码"
                               v-model="user.password">
                    </div>
                    <div class="form-group">
                        <label for="comfirmPassword">确认密码</label>
                        <input type="password" class="form-control" id="comfirmPassword" placeholder="确认密码"
                               v-model="user.comfirmPassword">
                    </div>

                    <div class="form-group">
                        <button type="submit" class="form-control btn btn-primary">注册</button>
                    </div>

                </form>

            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'register',
        data(){
            return {
                user: {}
            }
        },
        methods: {

            formSubmit: function (e) {
                e.preventDefault();

                var pramsObj = {
                    name: this.user.name,
                    password: this.user.password
                }

                if (!this.user.name || !this.user.password || !this.user.comfirmPassword) {
                    alert('请选完成相关信息的输入')
                    return
                }

                if (this.user.password == this.user.comfirmPassword) {
                    console.log('进来了')
                    this.http.post('/users', pramsObj).then(res => {
                        this.$router.push('/login')
                    })
                }else{
                    alert('两次输入的密码不一致')
                }


            }

        }
    }
</script>


