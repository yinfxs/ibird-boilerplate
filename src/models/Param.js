/**
 * 模块依赖
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const defineSchema = new Schema({
    code: {
        type: String,
        displayName: '参数编码',
        unique: true,
        required: '参数编码不能为空',
        index: true
    },
    name: {
        type: String,
        displayName: '参数名称',
        required: '参数名称不能为空'
    },
    value: {
        type: Schema.Types.Mixed,
        displayName: '参数值',
        required: '参数值不能为空'
    }
});

module.exports = {
    name: 'Param',
    displayName: '参数',
    schema: defineSchema
};