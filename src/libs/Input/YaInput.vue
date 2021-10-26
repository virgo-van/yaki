<template>
    <div class="ya-input"
         :class="[clearable?'is-clear':'',isFocus?'focus':'',!!prefixIcon?'is-prefix':'',!!suffixIcon?'is-suffix':'']"
         v-focus>
        <i class="iconfont suffix" :class="suffixIcon"></i>
        <i class="iconfont prefix" :class="prefixIcon"></i>
        <input type="text" class="input" v-model="modelValue" :placeholder="placeholder" @keyup="inputChange">
        <i class="iconfont clear-btn ya-close" v-show="clearable && modelValue !=='' && !suffixIcon "
           @click="clearHandle"></i>
    </div>
</template>

<script>
import {reactive, toRefs, getCurrentInstance} from "vue";

export default {
    name: "YaInput",
    directives: {
        focus: {
            mounted(el, bind) {
                let input = el.querySelector('.input')
                bind.instance.el = input
                input.addEventListener('focus', () => {
                    bind.instance.isFocus = true
                }, false)
                input.addEventListener('blur', () => {
                    bind.instance.isFocus = false
                }, false)
            },
        }
    },
    props: {
        prefixIcon: String,
        suffixIcon: String,
        clearable: Boolean,
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
    setup(props, ctx) {
        const instance = getCurrentInstance()

        console.log(instance)
        const state = reactive({
            isFocus: false,
            el: null
        })

        const clearHandle = () => {
            ctx.emit('update:modelValue', "")
            state.el.focus()
        }
        const inputChange = (e) => {
            ctx.emit('update:modelValue', e.target.value)
        }

        return {
            ...toRefs(state), clearHandle, inputChange
        }
    }
}

</script>

<style scoped lang="scss">
@import "input.scss";
</style>
