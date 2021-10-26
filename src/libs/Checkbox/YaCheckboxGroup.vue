<template>
    <div class="ya-checkbox-group">
        <ya-checkbox v-for="(item,index) in options" v-model="item['check']" :disabled="item['disabled']"
                     @on-change="(value)=>setCheckbox(value,item)">
            {{ item['label'] }}
        </ya-checkbox>
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
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    setup(props, ctx) {
        const FormatOption = () => {
            return props.options.map(item => {
                item['check'] = props.modelValue.includes(item['value'])
                return item
            })
        }
        const state = reactive({
            CheckGroupValue: FormatOption()
        })

        const setCheckbox = (value, item) => {
            if (value) {
                let arr = [].concat(props.modelValue)
                arr.push(item['value'])
                ctx.emit('update:modelValue', [...new Set(arr)])
            }
        }
        return {
            ...toRefs(state), setCheckbox
        }
    }
}

</script>

<style scoped lang="scss">

</style>
