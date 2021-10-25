<template>
    <div class="ya-checkbox" :class="{'is-checked':checkValue&& !disabled,'is-disabled':disabled}">
        <label>
            <input type="checkbox" v-model="checkValue" :disabled="disabled" @change="checkboxChange">
            <span class="checkbox iconfont"></span>
            <span class="text">
                <slot></slot>
            </span>
        </label>
    </div>
</template>

<script>
import {reactive, toRefs} from "vue";

export default {
    name: "YaCheckbox",
    props: {
        modelValue: {
            type: Boolean,
            default: false
        },
        disabled: Boolean,
        label: String
    },
    setup(props, ctx) {
        console.log(ctx.slots.default())
        const state = reactive({
            checkValue: props.modelValue
        })


        const checkboxChange = () => {
            console.log(state.checkValue)
            ctx.emit('input', state.checkValue)
        }

        return {
            ...toRefs(state), checkboxChange
        }
    }
}

</script>

<style scoped lang="scss">
@import "checkbox.scss";
</style>
