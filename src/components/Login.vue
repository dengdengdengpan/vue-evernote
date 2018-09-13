<template>
    <div id="login">
        <div class="modal-mask flex-center">
            <div class="modal-container">
                <div class="carousel"></div>
                <div class="sign-content">
                    <div class="register-container">
                        <h3>创建账户</h3>
                        <div class="register" v-show="true">
                            <input type="text" placeholder="用户名">
                            <input type="password" placeholder="密码">
                            <p class="notice">创建账号，表示你同意<span class="special">服务条款</span>和<span class="special">隐私政策</span></p>
                            <div class="button-sign">创建账号</div>
                        </div>
                    </div>
                    <div class="login-container active">
                        <h3>登录</h3>
                        <div class="login" v-show="false">
                            <input type="text" placeholder="印象笔记 用户名">
                            <input type="password" placeholder="密码">
                            <div class="button-sign">登录</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data () {
        return {
            message: 'this is login page'
        }
    }
}
</script>

<style scoped lang="scss">
#login {
    .modal-mask {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        min-width: 800px;
        background-color: rgba(0,0,0,.65);

        .modal-container {
            display: flex;
            width: 800px;
            height: 500px;
            border-radius: 3px;
            background-color: #f8f8f8;
            box-shadow: 0 2px 8px rgba(0, 0, 0, .8);
            user-select: none;

            .carousel {
                flex-grow: 1;
                background-color: #24AD4B;
            }

            .sign-content {
                position: relative;
                width: 270px;
                border-left: 1px solid #D4D4D4;

                .register-container.active {
                    > h3 {
                        border-top: 1px solid #E5E3E5;
                        border-bottom: none;
                    }
                    & {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                    }
                    
                }

                .login-container.active {
                    > h3 {
                        border-top: 1px solid #E5E3E5;
                        border-bottom: none;
                    }
                    & {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                    }
                }

                h3 {
                    padding: 10px 20px;
                    border-bottom: 1px solid #E5E3E5;
                    font-size: 18px;
                    font-weight: normal;
                    cursor: pointer;
                }

                .register, .login {
                    padding: 10px 20px;

                    input {
                        display: block;
                        width: 100%;
                        height: 36px;
                        margin-top: 10px;
                        padding-left: 10px;
                        border: 1px solid #B1B1B1;
                        border-radius: 3px;
                        outline: none;
                        font-size: 14px;
                        &:focus {
                            outline: 3px solid #89BAF8;
                        }
                    }

                    .notice {
                        padding: 10px 0;
                        font-size: 12px;
                        color: #434343;

                        .special {
                            color: #1563DA;
                            text-decoration: underline;
                            cursor: pointer;
                        }
                    }

                    .button-sign {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 38px;
                        margin-top: 10px;
                        border-radius: 5px;
                        background-color: #1BA84B;
                        font-size: 16px;
                        font-weight: bold;
                        color: #fff;
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
</style>


