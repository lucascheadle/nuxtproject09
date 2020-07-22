
<template>
    <div id="app">
        <h2>Gallery</h2>
        <Imagesfill v-bind:pictures="pictures"/>
    </div>
</template>


<script>

import Imagesfill from "@/components/Imagesfill"

export default {
    components: {
        'Imagesfill': Imagesfill
    },
    data() {
        return {
            pictures: [
                        {url:require('../assets/images/01.jpeg'), isActive:true}, {url:require('../assets/images/02.jpeg'), isActive:true}, {url:require('../assets/images/03.jpeg'), isActive:true}, {url:require('../assets/images/04.jpeg'), isActive:true},
                        {url:require('../assets/images/05.jpeg'), isActive:true}, {url:require('../assets/images/06.jpeg'), isActive:true}, {url:require('../assets/images/07.jpeg'), isActive:true}, {url:require('../assets/images/08.jpeg'), isActive:true},
                        {url:require('../assets/images/09.jpeg'), isActive:true}, {url:require('../assets/images/10.jpeg'), isActive:true}
                    ]
        }
    },
}
</script>

<style>
h2 {
    text-align: center;
}
</style>