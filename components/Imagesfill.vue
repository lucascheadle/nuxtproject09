// here is the separate images component using prop //

<template>
    <div id="app">
        <div class="gallery-container">
            <div class="row px-4">
                <div v-for= "picture in pictures" v-bind:key="picture.id" class="col-lg-3 col-md-4 col-xs-6 thumb">
                    <b-img v-bind:src= "picture.url" class="garden"></b-img>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>

export default {
    name: 'app',
    props: {
        pictures: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            isActive: true
        }
    },
}

</script>

<style>

.garden {
    width: 100%;
    height: 200px;
    border-radius:5px;
    object-fit:cover;
    padding: 1rem;
}

</style>

