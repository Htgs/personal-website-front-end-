// import FormAjaxElSelect from '@/components/common/FormAjaxElSelect.vue';
// import TableCacheName from '@/components/TableCacheName.vue';
import TableTime from '@/components/TableTime.vue';
// import TableDetail from '@/components/TableDetail.vue';

// import {urlPrefix} from '@/utils/utils.js';

const resume = {
	// 是否显示设置
	hasTitleBack: false,
	hasTabs: false,
	hasConditionSearch: true,
	hasConditionAdd: true,
	hasConditionRefresh: true,
	hasTableSelection: false,
	hasTableIndex: true,
	hasTableOperation: true,
	hasTableOperationEdit: true,
	hasTableOperationDelete: true,
	hasTableOperationRecovery: true,
	hasPaginationBatchDestroy: false,
	// 标题*
	commonTitle: '简历管理',
	// 每个标签页的数据
	panelData: {
		'resume': {
			// 表格列
			commonTableField: [
				{
					label: '作者用户名',
					field: 'user.name', // 关联数据的字段
				},
				{
					label: '简历名称',
					field: 'title',
				},
				{
					label: '求职意向',
					field: 'forward_to_job',
				},
				{
					label: '教育背景',
					field: 'education',
				},
				{
					label: '工作经历',
					field: 'work',
					// component: JSON
				},
				{
					label: '项目经验',
					field: 'project',
					// component: JSON
				},
				{
					label: '自我评价',
					field: 'introduction',
				},
				{
					label: '创建时间',
					field: 'created_at',
					component: TableTime,
				},
				{
					label: '更新时间',
					field: 'updated_at',
					component: TableTime,
				},
				{
					label: '删除时间',
					field: 'deleted_at',
					component: TableTime,
				},
			],
			// 分页设定
			commonPaginationSetting: {
				className: '',
				layout: 'total, prev, pager, next, jumper',
			},
			// 默认表单域
			commonFormFieldsFn(type) {
				return [];
			},
		},
	},
};

module.exports = resume;
