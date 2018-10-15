<template>
    <div id="app">
        <div class="containe-fulid">
            <app-header></app-header>
        </div>

        <div class="container">
            <router-view></router-view>
        </div>

        <div class="container">
            <div class="col-sm-12">
                <div class="col-sm-4"><router-view name="contact"></router-view></div>
                <div class="col-sm-4"><router-view name="order"></router-view></div>
                <div class="col-sm-4"><router-view name="delivery"></router-view></div>
            </div>
        </div>


    </div>
</template>

<script>
    import Headers from './components/Headers.vue'

    export default {
        name: 'app',
        components: {
            appHeader: Headers,
        }
    }
</script>

<style>

</style>
