<template lang="html">
    <div>
        <div class="col-sm-6 col-md-4">
            <div class="thumbnail">
                <img src="src/assets/img/coconut-icecream.jpg" alt="#">
                <div class="caption">
                    <h3>
                    {{ title }}
                    </h3>
                    <p><slot></slot></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title'],
    data() {
        return {
        }
    }
}
</script>

<style lang="css">
</style>
