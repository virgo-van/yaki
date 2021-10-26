<template>
    <div class="icon">
        <ul class="icon_lists dib-box">

            <li class="dib">
                <span class="icon iconfont ya-close"></span>
                <div class="name">
                    关闭
                </div>
                <div class="code-name">.ya-close
                </div>
            </li>

            <li class="dib">
                <span class="icon iconfont ya-check"></span>
                <div class="name">
                    勾1
                </div>
                <div class="code-name">.ya-check
                </div>
            </li>

            <li class="dib">
                <span class="icon iconfont ya-file-upload"></span>
                <div class="name">
                    文件上传
                </div>
                <div class="code-name">.ya-file-upload
                </div>
            </li>

            <li class="dib">
                <span class="icon iconfont ya-message"></span>
                <div class="name">
                    消息
                </div>
                <div class="code-name">.ya-message
                </div>
            </li>

            <li class="dib">
                <span class="icon iconfont ya-location"></span>
                <div class="name">
                    地图
                </div>
                <div class="code-name">.ya-location
                </div>
            </li>

            <li class="dib">
                <span class="icon iconfont ya-set"></span>
                <div class="name">
                    设置
                </div>
                <div class="code-name">.ya-set
                </div>
            </li>

            <li class="dib">
                <span class="icon iconfont ya-delete"></span>
                <div class="name">
                    删除
                </div>
                <div class="code-name">.ya-delete
                </div>
            </li>

            <li class="dib">
                <span class="icon iconfont ya-zoom-in"></span>
                <div class="name">
                    放大
                </div>
                <div class="code-name">.ya-zoom-in
                </div>
            </li>

            <li class="dib">
                <span class="icon iconfont ya-home"></span>
                <div class="name">
                    主页
                </div>
                <div class="code-name">.ya-home
                </div>
            </li>

            <li class="dib">
                <span class="icon iconfont ya-shop"></span>
                <div class="name">
                    购物
                </div>
                <div class="code-name">.ya-shop
                </div>
            </li>

            <li class="dib">
                <span class="icon iconfont ya-file"></span>
                <div class="name">
                    文件
                </div>
                <div class="code-name">.ya-file
                </div>
            </li>

            <li class="dib">
                <span class="icon iconfont ya-explain"></span>
                <div class="name">
                    说明
                </div>
                <div class="code-name">.ya-explain
                </div>
            </li>

            <li class="dib">
                <span class="icon iconfont ya-link"></span>
                <div class="name">
                    链接
                </div>
                <div class="code-name">.ya-link
                </div>
            </li>

            <li class="dib">
                <span class="icon iconfont ya-folder-collect"></span>
                <div class="name">
                    文件收藏
                </div>
                <div class="code-name">.ya-folder-collect
                </div>
            </li>

            <li class="dib">
                <span class="icon iconfont ya-collect"></span>
                <div class="name">
                    收藏
                </div>
                <div class="code-name">.ya-collect
                </div>
            </li>

            <li class="dib">
                <span class="icon iconfont ya-right"></span>
                <div class="name">
                    正确
                </div>
                <div class="code-name">.ya-right
                </div>
            </li>

            <li class="dib">
                <span class="icon iconfont ya-create"></span>
                <div class="name">
                    添加
                </div>
                <div class="code-name">.ya-create
                </div>
            </li>

            <li class="dib">
                <span class="icon iconfont ya-edit"></span>
                <div class="name">
                    编辑
                </div>
                <div class="code-name">.ya-edit
                </div>
            </li>

            <li class="dib">
                <span class="icon iconfont ya-note"></span>
                <div class="name">
                    记事本
                </div>
                <div class="code-name">.ya-note
                </div>
            </li>

            <li class="dib">
                <span class="icon iconfont ya-chat"></span>
                <div class="name">
                    聊天
                </div>
                <div class="code-name">.ya-chat
                </div>
            </li>

            <li class="dib">
                <span class="icon iconfont ya-folder"></span>
                <div class="name">
                    文件夹
                </div>
                <div class="code-name">.ya-folder
                </div>
            </li>

            <li class="dib">
                <span class="icon iconfont ya-like"></span>
                <div class="name">
                    点赞
                </div>
                <div class="code-name">.ya-like
                </div>
            </li>

            <li class="dib">
                <span class="icon iconfont ya-zoom-out"></span>
                <div class="name">
                    缩小
                </div>
                <div class="code-name">.ya-zoom-out
                </div>
            </li>

            <li class="dib">
                <span class="icon iconfont ya-time"></span>
                <div class="name">
                    时间
                </div>
                <div class="code-name">.ya-time
                </div>
            </li>

            <li class="dib">
                <span class="icon iconfont ya-search"></span>
                <div class="name">
                    搜索
                </div>
                <div class="code-name">.ya-search
                </div>
            </li>

            <li class="dib">
                <span class="icon iconfont ya-image"></span>
                <div class="name">
                    图片
                </div>
                <div class="code-name">.ya-image
                </div>
            </li>

            <li class="dib">
                <span class="icon iconfont ya-error"></span>
                <div class="name">
                    错误
                </div>
                <div class="code-name">.ya-error
                </div>
            </li>

            <li class="dib">
                <span class="icon iconfont ya-document"></span>
                <div class="name">
                    文档
                </div>
                <div class="code-name">.ya-document
                </div>
            </li>

        </ul>
    </div>
</template>

<script>
import {reactive, toRefs,} from "vue";

export default {
    name: "Icon",
    setup(props, ctx) {
        const state = reactive({})

        return {
            ...toRefs(state),
        }
    }
}

</script>

<style scoped lang="scss">
.icon {
    ul {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 30px;
        padding: 0;
        margin: 0;

        li {
            list-style: none;
            text-align: center;
            color: #666;
            font-size: 14px;
            cursor: pointer;

            .name {
                margin: 10px 0;
            }

            .iconfont {
                font-size: 30px;
                color: #666;
            }
        }
    }
}
</style>
