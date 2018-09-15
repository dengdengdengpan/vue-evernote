<template>
    <div id="sign">
        <div class="modal-mask flex-center">
            <div class="modal-container">
                <div class="carousel"></div>
                <div class="sign-content">
                    <div class="signup-container">
                        <h3 @click="showSignup" class="sign-type">创建账户</h3>
                        <transition name="slide">
                            <div v-show="isShowSignup" class="signup">
                                <input v-model="signup.username" type="text" class="input" placeholder="请设置用户名">
                                <p :class="{error: signup.isUsernameError}" class="prompt">用户名是长度为4~10位的中文、字母、数字及下划线，不能包含空格</p>
                                <input v-model="signup.password" type="password" class="input" placeholder="请设置密码">
                                <p :class="{error: signup.isPasswordError}" class="prompt">密码是长度为6~16位的字母、数字及下划线，区分大小写，不能包含空格</p>
                                <p class="prompt">创建账号，表示你同意<span class="special">服务条款</span>和<span class="special">隐私政策</span></p>
                                <div @click="onSignup" class="btn btn-submit">创建账号</div>
                            </div>
                        </transition>
                    </div>
                    <div :class="{active: isSigninActive}" class="signin-container">
                        <h3 @click="showSignin" class="sign-type">登录</h3>
                        <transition name="slide">
                            <div v-show="isShowSignin" class="signin">
                                <input v-model="signin.ursername" type="text" class="input" placeholder="印象笔记 用户名">
                                <input v-model="signin.password" type="password" class="input" placeholder="密码">
                                <p :class="{error: signin.isError}" class="prompt">{{signin.prompt}}</p>
                                <div @click="onSignin" class="btn btn-submit">登录</div>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Signup',
    data () {
        return {
            isShowSignup: true,
            isShowSignin: false,
            isSigninActive: false,
            signup: {
                username: '',
                password: '',
                prompt: '创建账户后请记住用户名和密码',
                isUsernameError: false,
                isPasswordError: false
            },
            signin: {
                username: '',
                password: '',
                // 用户名或密码错误，请重新输入
                prompt: '请输入用户名和密码',
                isError: false
            }
        }
    },
    methods: {
        showSignup () {
            this.isShowSignup = true;
            this.isShowSignin = false;
            this.isSigninActive = false;
        },
        showSignin () {
            this.isShowSignup = false;
            this.isShowSignin = true;
            this.isSigninActive = true;
        },
        onSignup () {
            let username = this.signup.username.replace(/\s+/g, ''),
                password = this.signup.password.replace(/\s+/g, ''),
                usernameResult = this.verifySignup(username),
                passwordResult = this.verifySignup(password);
            this.signup.username = username;
            this.signup.password = password;
            if (!usernameResult.isUsernameVerified) {
                this.signup.isUsernameError = true;
            } else {
                this.signup.isUsernameError = false;
            }
            if (!passwordResult.isPasswordVerified) {
                this.signup.isPasswordError = true;
            } else {
                this.signup.isPasswordError = false;
            }
        },
        onSignin () {
            console.log('signin')
        },
        verifySignup (params) {
            let checkUsernameRegex = /^[\w\u4e00-\u9fa5]{4,10}$/,
                checkPasswordRegex = /^[\w]{6,16}$/;
            return {
                isUsernameVerified: checkUsernameRegex.test(params),
                isPasswordVerified: checkPasswordRegex.test(params)
            }
        }
    }
}
</script>

<style scoped lang="scss">
#sign {
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
                background-color: #2ab54d;
            }

            .sign-content {
                position: relative;
                width: 290px;
                border-left: 1px solid #D4D4D4;
                overflow: hidden;

                .signin-container {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;

                    .sign-type {
                        border-top: 1px solid #E5E3E5;
                        border-bottom: none;
                    }

                    &.active {
                        position:relative;

                        .sign-type {
                            border-top: none;
                            border-bottom: 1px solid #E5E3E5;
                        }

                        .signin {
                            padding-top: 20px;
                        }
                    }
                }

                .signup-container, .signin-container {
                    .sign-type {
                        padding: 10px 15px;
                        border-bottom: 1px solid #E5E3E5;
                        font-size: 18px;
                        font-weight: normal;
                        cursor: pointer;
                    }
                    
                    .signup, .signin {
                        padding: 10px 15px;

                        .input {
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

                        .prompt {
                            margin: 3px 0 15px;
                            font-size: 12px;
                            color: #484848;

                            .special {
                                color: #1563DA;
                                text-decoration: underline;
                                cursor: pointer;
                            }

                            &.error {
                                color: red;
                            }
                        }

                        .btn-submit {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 38px;
                            border-radius: 5px;
                            background-color: #21b04d;
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
}
</style>


