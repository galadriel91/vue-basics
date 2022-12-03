<template>
    <q-page padding>
        <section class="row q-col-gutter-x-xl">
            <div class="col-12 col-sm-auto q-py-md flex flex-center">
                <q-avatar size="150px">
                    <img src="logo.ico" />
                </q-avatar>
            </div>
            <div class="col-grow column justify-between">
                <div class="row items-center">
                    <span class="text-h5">daniella.torresvi</span>
                    <q-space />
                    <div class="q-gutter-x-sm">
                        <q-btn label="팔로우" color="blue-6" />
                        <q-btn
                            outline
                            color="grey-5"
                            label="메세지 보내기"
                            text-color="grey-10"
                        />
                        <q-btn
                            outline
                            color="grey-5"
                            text-color="grey-10"
                            icon="person_add"
                        />
                        <q-btn flat round color="grey-10" icon="more_horiz" />
                    </div>
                </div>
                <div class="row q-col-gutter-x-md">
                    <span>게시물 414</span>
                    <span>팔로워 7005</span>
                    <span>팔로우 2377</span>
                </div>
                <div>
                    <div>Danny🐣</div>
                    <div>예술</div>
                    <div>- Let’s motivate each other !</div>
                    <div>♡ Please respect • Please be nice ♡</div>
                    <div>B.A. daniella.torresvipriv</div>
                </div>
            </div>
        </section>
        <section class="q-my-lg">
            <div class="row no-wrap scroll q-col-gutter-x-xl">
                <div v-for="n in 15" :key="n" class="col-auto">
                    <article>
                        <q-avatar size="70px">
                            <img src="logo.ico" />
                        </q-avatar>
                        <div class="q-my-sm text-center">제목</div>
                    </article>
                </div>
            </div>
        </section>
        <section>
            <div class="row q-col-gutter-md">
                <q-card
                    v-for="n in 12"
                    :key="n"
                    class="my-card no-shadow col-12 col-sm-6 col-md-4 col-lg-3"
                >
                    <q-img
                        src="https://cdn.quasar.dev/img/parallax2.jpg"
                        ratio="1"
                        fit="cover"
                    >
                        <div
                            class="absolute-bottom text-subtitle2 text-center flex flex-center full-height"
                        >
                            Title
                        </div>
                    </q-img>
                </q-card>
            </div>
        </section>
    </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
