<template>
    <div class="ya-radio-group">
        <ya-radio v-for="(item,index) in option" :key="item['value']" v-model="modelValue" :label="item['value']"
                  :disabled="item['disabled']" @on-change="getValue">
            {{ item['label'] }}
        </ya-radio>
    </div>
</template>

<script>

export default {
    name: "YaRadioGroup",
    props: {
        modelValue: String,
        option: Array
    },
    setup(props, ctx) {

        const getValue = (value) => {
            ctx.emit('update:modelValue', value)
            ctx.emit('on-change', value)
        }

        return {
            getValue
        }
    }
}

</script>

<style scoped lang="scss">

</style>
