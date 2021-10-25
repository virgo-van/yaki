<template>
    <div class="ya-checkbox-group">
        <slot></slot>
    </div>
</template>

<script>
import {reactive, toRefs,} from "vue";

export default {
    name: "YaCheckboxGroup",
    props: {
        modelValue: {
            type: Array,
            default: () => []
        }
    },
    setup(props, ctx) {
        console.log(ctx.slots.default())
        const state = reactive({})


        return {
            ...toRefs(state),
        }
    }
}

</script>

<style scoped lang="scss">

</style>
