<template>
    <button class="ya-button"
            :class="[`ya-${type}-button`,disabled?'is-disabled':'',round?'is-round':'',plain?'is-plain':'',`ya-${size}-button`]"
            :disabled="disabled">
        <i v-show="!!icon" class="iconfont" style="margin-right: 10px" :class="icon"></i>
        <slot></slot>
    </button>
</template>

<script>
import {reactive, toRefs,} from "vue";

export default {
    name: "YaButton",
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        icon: String,
        disabled: Boolean,
        size: {
            type: String,
            default: 'medium'
        },
        round: Boolean,
        plain: Boolean,
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
@import "../css/index.scss";
@import "./button.scss";
</style>
