<template>
    <div id="about" class="col-sm-12">
        <ul class="list-group col-sm-3 mb-5">

            <router-link to="/history" tag="li"><a class="list-group-item">历史订单</a></router-link>
            <router-link to="/contact" tag="li"><a class="list-group-item">联系我们</a></router-link>

            <router-link to="/order" tag="li"><a class="list-group-item">订车管理</a></router-link>
            <router-link to="/delivery" tag="li"><a class="list-group-item">快递信息</a></router-link>
        </ul>
        <div class="col-sm-9">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'about'
    }


</script>

<style>
    .list-group li {
        margin-bottom: 20px;
        list-style: none;
    }
</style>


