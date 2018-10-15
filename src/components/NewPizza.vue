<template>
    <div id="newPizza">
        <h2>添加新车型</h2>
        <form class="form-horizontal" @submit="formSubmit">
            <div class="form-group">
                <label for="name" class="col-sm-2 control-label">品种</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="name" placeholder="品种" v-model="newPizza.name">
                </div>
            </div>
            <div class="form-group">
                <label for="description" class="col-sm-2 control-label">描述</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="description" placeholder="描述"
                           v-model="newPizza.description">
                </div>
            </div>

            <div class="form-group">
                <label class="col-sm-2 control-label">选项1</label>
            </div>
            <div class="form-group">
                <label for="size1" class="col-sm-2 control-label">尺寸</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="size1" placeholder="尺寸" v-model="newPizza.size1">
                </div>
            </div>
            <div class="form-group">
                <label for="price1" class="col-sm-2 control-label">价格</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="price1" placeholder="价格" v-model="newPizza.price1">
                </div>
            </div>

            <div class="form-group">
                <label class="col-sm-2 control-label">选项2</label>
            </div>
            <div class="form-group">
                <label for="size2" class="col-sm-2 control-label">尺寸</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="size2" placeholder="尺寸" v-model="newPizza.size2">
                </div>
            </div>
            <div class="form-group">
                <label for="price2" class="col-sm-2 control-label">价格</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="price2" placeholder="价格" v-model="newPizza.price2">
                </div>
            </div>

            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-default">添加</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>

    export default {
        name: 'newPizza',
        data(){
            return {
                newPizza: {}
            }
        },
        methods: {
            formSubmit(e){
                e.preventDefault();
                var sumbitData = {
                    name: this.newPizza.name,
                    description: this.newPizza.description,
                    options: [
                        {
                            size: this.newPizza.size1,
                            price: this.newPizza.price1,
                        },
                        {
                            size: this.newPizza.size2,
                            price: this.newPizza.price2,
                        }
                    ]
                }
                this.http.post('/pizza',sumbitData).then(res => this.$store.commit('addMenu',res.data)).catch( e=> {console.log(e)})
            }
        }
    }
</script>


