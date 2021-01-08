<template>
    <div>
        <v-time-picker :buttonText="Save" v-if="showTimePicker" v-bind="time" color="#000" format="24hr">
        <btn class="p-12 bg-gold" @click.native="showTimePicker = false">save</btn></v-time-picker>
    </div>
</template>

<script>
import btn from "./Button"
    export default {
        data() {
            return {
                time: ""
            }
        },
        props: {
            showTimePicker: Boolean
        },
        components: {
            "btn": btn
        }
    }
</script>

<style lang="scss" scoped>

</style>