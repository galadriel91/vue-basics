<template>
    <header>
        <div class="headerWrap">
            <h1><RouterLink to="/">Vue Router</RouterLink></h1>
            <nav>
                <ul>
                    <li>
                        <RouterLink to="/main"><span>Vue</span></RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/pinia"><span>Pinia</span></RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/router"><span>VueRouter</span></RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components/RouterHeader';
</style>