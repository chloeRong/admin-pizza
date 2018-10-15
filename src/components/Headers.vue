<template>
    <div id="headers">
        <nav class="navbar navbar-default">
            <div class="container">
                <div class="navbar-header">
                    <a class="py-2 navbar-brand" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             class="d-block mx-auto">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
                            <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
                            <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
                            <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
                            <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
                            <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
                        </svg>
                    </a>
                    <a class="navbar-brand" href="#">CAR管理系统</a>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li>
                            <router-link to='/'>主页</router-link>
                        </li>
                        <li>
                            <router-link to="/menu">菜单</router-link>
                        </li>
                        <li>
                            <router-link to="/admin">管理</router-link>
                        </li>
                        <li>
                            <router-link to="/about">关于我们</router-link>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <router-link to="/login" v-show="!isLogin">登录</router-link>
                        </li>

                        <li v-show="isLogin"><a href="#">{{currentUser}}</a></li>
                        <li>
                            <router-link to="/login" v-show="isLogin">[退出]</router-link>
                        </li>


                        <li>
                            <router-link to="/register" v-show="!isLogin">注册</router-link>
                        </li>

                    </ul>
                </div><!--/.nav-collapse -->
            </div><!--/.container-fluid -->
        </nav>
    </div>
</template>

<script>

    export default {
        name: 'headers',
        computed: {
            currentUser: function () {
                return this.$store.state.currentUser
            },
            isLogin: function () {
                return this.$store.state.isLogin

            }

        }
    }
</script>

<style>
    .navbar-brand {
        line-height: 24px;
    }
</style>


