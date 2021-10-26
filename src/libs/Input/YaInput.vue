<template>
    <div class="ya-input">
        <input type="text" class="input" :placeholder="placeholder">
    </div>
</template>

<script>
import {reactive, toRefs,} from "vue";

export default {
    name: "YaInput",
    props: {
        type: {
            type: String,
            default: 'text'
        },
        placeholder: String,
        size: {
            type: String,
            default: "medium"
        },
        modelValue: [String, Number]
    },
    setup() {
        const state = reactive({})

        return {
            ...toRefs(state),
        }
    }
}

</script>

<style scoped lang="scss">
@import "input.scss";
</style>
