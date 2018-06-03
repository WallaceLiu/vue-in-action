<template>
    <div id="app">
        <tabs></tabs>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import Tabs from "./components/tabs.vue" // 自定义组件
    import "./assets/less/site.less"

    export default {
        components: {Tabs} // 使用组件
    }
</script>

