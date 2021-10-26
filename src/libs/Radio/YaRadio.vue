<template>
    <div class="ya-radio" :class="{'is-checked':radioValue,'is-disabled':disabled}">
        <label>
            <span class="radio-span"></span>
            <input type="radio" class="radio" v-model="radioValue" @change="radioChange" :disabled="disabled">
            <span class="text">
            <slot></slot>
        </span>
        </label>
    </div>
</template>

<script>
import {reactive, toRefs, watch} from "vue";

export default {
    name: "YaRadio",
    props: {
        modelValue: String,
        label: String,
        disabled: Boolean
    },
    setup(props, ctx) {
        const state = reactive({
            radioValue: props.modelValue === props.label
        })

        watch(() => props.modelValue, (value) => {
            state.radioValue = value === props.label
        })

        const radioChange = () => {
            ctx.emit('update:modelValue', props.label)
            ctx.emit('on-change', props.label)
        }

        return {
            ...toRefs(state), radioChange
        }
    }
}

</script>

<style scoped lang="scss">
@import "radio.scss";
</style>
