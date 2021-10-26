<template>
    <ya-button @click="buttonHandle" size="mini">测试点击</ya-button>
    <div class="item">
        <div class="title">输入框组件</div>
        <div class="container">
            <ya-input></ya-input>
        </div>
    </div>
    <div class="item">
        <div class="title">开关组件</div>
        <div class="container">
            <ya-switch v-model="switchValue" color="#f08300"/>
            <ya-switch v-model="switchValue" size="small" color="#FF3336"/>
            <ya-switch v-model="switchValue" size="mini" color="#0190ff"/>
        </div>
    </div>
    <div class="item">
        <div class="title">单选框</div>
        <div class="container">
            <ya-radio v-model="radioValue" label="0" disabled>北京</ya-radio>
            <ya-radio v-model="radioValue" label="1">深圳</ya-radio>
            <ya-radio v-model="radioValue" label="2">上海</ya-radio>
            <ya-radio v-model="radioValue" label="3">广州</ya-radio>
            <div class="group">
                <ya-radio-group v-model="radioGroupValue" :option="checkOption"></ya-radio-group>
            </div>
        </div>
    </div>
    <div class="item">
        <div class="title">按钮组件：</div>
        <div class="container">
            <div class="button-item">
                <ya-button type="success" icon="ya-home" size="mini" plain>按钮</ya-button>
                <ya-button type="success" icon="ya-message" size="mini" round>按钮</ya-button>
                <ya-button type="success" icon="ya-delete" size="mini" disabled>按钮</ya-button>
                <ya-button type="success" icon="ya-set" size="mini">按钮</ya-button>
            </div>
            <div class="button-item">
                <ya-button icon="ya-home" size="small" plain>按钮</ya-button>
                <ya-button icon="ya-message" size="small" round>按钮</ya-button>
                <ya-button icon="ya-delete" size="small" disabled>按钮</ya-button>
                <ya-button icon="ya-set" size="small">按钮</ya-button>
            </div>

            <div class="button-item">
                <ya-button type="warning" icon="ya-home" plain>按钮</ya-button>
                <ya-button type="warning" icon="ya-message" round>按钮</ya-button>
                <ya-button type="warning" icon="ya-delete" disabled>按钮</ya-button>
                <ya-button type="warning" icon="ya-set">按钮</ya-button>
            </div>
            <div class="button-item">
                <ya-button type="error" icon="ya-home" plain>按钮</ya-button>
                <ya-button type="error" icon="ya-message" round>按钮</ya-button>
                <ya-button type="error" icon="ya-delete" disabled>按钮</ya-button>
                <ya-button type="error" icon="ya-set">按钮</ya-button>
            </div>
            <div class="button-item">
                <ya-button type="text" icon="ya-home" disabled>按钮</ya-button>
                <ya-button type="text" icon="ya-message">按钮</ya-button>
            </div>

        </div>
    </div>
    <div class="item">
        <div class="title">多选框组件：</div>
        <div class="container">
            <!--            <ya-checkbox v-model="check" disabled>篮球</ya-checkbox>-->
            <!--            <ya-checkbox v-model="check">羽毛球</ya-checkbox>-->
            <!--            <ya-checkbox v-model="check">足球</ya-checkbox>-->
            <ya-checkbox v-model="check">排球</ya-checkbox>

            <div class="check-group">
                <ya-checkbox-group v-model="checkGroup" :options="checkOption"></ya-checkbox-group>
            </div>
        </div>
    </div>
    <div class="item">
        <div class="title"></div>
        <div class="container"></div>
    </div>
</template>

<script>

import {reactive, toRefs} from "vue";

export default {
    name: 'App',
    setup() {
        const state = reactive({
            check: false,
            radioValue: "0",
            switchValue: false,
            radioGroupValue: "2",
            checkGroup: ['0', '3'],
            checkOption: [
                {label: "篮球", value: '0', disabled: false},
                {label: "足球", value: '1', disabled: true},
                {label: "排球", value: '2', disabled: false},
                {label: "乒乓球", value: '3', disabled: false},
                {label: "自行车", value: '4', disabled: false},
                {label: "击剑", value: '5', disabled: false},
            ]
        })

        const getCheckValue = () => {
            console.log(state.checkGroup.join('-'))
        }

        const buttonHandle = () => {
            console.log(state.radioGroupValue)
            state.switchValue = !state.switchValue
        }
        return {
            ...toRefs(state), getCheckValue, buttonHandle
        }
    }
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;

    .item {
        width: 800px;
        margin: 50px auto;
        text-align: left;
        background: #f9f9f9;
        padding: 50px;
        box-sizing: border-box;

        .title {
            margin: 25px 0;
            font-size: 24px;
        }
    }

}
</style>
