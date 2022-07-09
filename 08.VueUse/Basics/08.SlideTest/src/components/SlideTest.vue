<template>
    <div>
        <div class="slideWrap">
            <VueSlickCarousel v-bind="settings">
                <div><img :src="require('Image/mainVisual.jpg')" alt="메인 비쥬얼 사진"></div>
                <div><img :src="require('Image/mainVisual2.jpg')" alt="메인 비쥬얼 사진"></div>
                <div><img :src="require('Image/mainVisual3.jpg')" alt="메인 비쥬얼 사진"></div>
            </VueSlickCarousel>
        </div>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
export default {
    components:{
        VueSlickCarousel
    },
    data(){
        return{
            settings:{
                "dots": true,
                "dotsClass": "slick-dots custom-dot-class",
                "edgeFriction": 0.35,
                "infinite": true,
                "speed": 500,
                "autoplay":true,
                "slidesToShow": 1,
                "slidesToScroll": 1
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import 'vue-slick-carousel/dist/vue-slick-carousel.css';
    @import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
    @import 'Style/components/SlideTest';
</style>

<style lang="scss">
    .slick-dots{
        bottom: 1rem;
    }
    .slick-slide{
        height: calc(100vh - 6rem) !important;
    }
</style>