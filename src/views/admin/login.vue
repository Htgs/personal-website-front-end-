<template>
	<el-row type="flex" justify="center" align="middle" class="h100">
		<el-col :xs="24" :sm="18" :md="12" :lg="8" :xl="6">
			<el-card :body-style="{ padding: '30px' }">
				<div slot="header" class="clearfix">
					<h2>登录</h2>
				</div>
				<Form
					ref="loginForm"
					:FormSetting="{'label-width': '80px'}"
					:FormData="loginForm"
					v-on:submitForm="submitForm('loginForm')"
				/>
				<el-button class="block login-btn" type="primary" @click="submitForm('loginForm')">登录</el-button>
			</el-card>
		</el-col>
	</el-row>
</template>

<script>
import {ajax} from '@/utils/ajax.js';
import {urlPrefix} from '@/utils/utils.js';
import {pattern} from '@/utils/validator.js';
import Form from '@/components/common/Form.vue';
export default {
	name: 'AdminLogin',
	components: {
		Form,
	},
	data() {
		return {
			loginForm: {
				formField: [
					{
						component: 'ElInput',
						label: '账号',
						placeholder: '请输入用户名/邮箱/手机号码',
						field: 'account',
						// rules: [
						// 	{
						// 		method: 'accountValid',
						// 	},
						// ],
						value: null,
					},
					{
						component: 'ElInput',
						inputType: 'password',
						label: '密码',
						placeholder: '请输入密码',
						field: 'password',
						rules: [
							{
								method: 'lengthValid',
								params: {
									length: [6, 12],
								},
							},
						],
						value: null,
					},
					{
						component: 'ElCheckbox',
						label: '',
						field: 'week',
						placeholder: '保持一周登录',
						required: false,
						value: null,
					},
				]
			},
		};
	},
	methods: {
		submitForm(formName) {
			this.$refs[formName].validate()
				.then(({FormData, params}) => {
					let data = {
						password: params['password'],
						week: params['week'],
					};
					if (pattern['email'](params['account'])) {
						data['email'] = params['account'];
					} else if (pattern['phone'](params['account'])) {
						data['phone'] = params['account'];
					} else {
						data['name'] = params['account'];
					}
					ajax('post', `/admin/login`, data)
						.then(res => {
							console.log(res.data);
							this.$store.commit('SET_USERINFO', res.data);
							this.$router.push('/admin');
						});
				})
				.catch(_ => {});
		},
	}
};
</script>

<style scoped>
	.login-btn {
		width: 80%;
		margin: 0 auto;
	}
</style>
