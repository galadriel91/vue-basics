<template>
    <header>
        <div class="headerWrap">
            <h1><RouterLink to="/">Vue Router</RouterLink></h1>
            <nav>
                <ul>
                    <li><RouterLink to="/webpack"><span>Webpack</span></RouterLink></li>
                    <li><RouterLink to="/vuex"><span>Vuex</span></RouterLink></li>
                    <li><RouterLink to="/router"><span>VueRouter</span></RouterLink></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    @import 'Style/components/VueNav';
</style>