<template>
    <div class="ya-switch" :class="[modelValue?'is-checked':'',`ya-switch-${size}`]">
        <label>
            <span class="switch-container" :style="{'background':modelValue?color:'#ccc'}">
                <span class="init switch-item" :class="[modelValue?'active':'init']"></span>
            </span>
            <input type="checkbox" class="checkbox" v-model="modelValue" @change="switchChange">
        </label>
    </div>
</template>

<script>

export default {
    name: "YaSwitch",
    props: {
        modelValue: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: "#0190ff"
        },
        size: {
            type: String,
            default: "medium"
        }
    },
    setup(props, ctx) {

        const switchChange = (e) => {
            ctx.emit('update:modelValue', e.target.checked)
            ctx.emit('on-change', e.target.checked)
        }

        return {
            switchChange
        }
    }
}

</script>

<style scoped lang="scss">
@import "switch.scss";
</style>
