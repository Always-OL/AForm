/*!
 * AForm v1.1
 *
 * Copyright 2014, л����
 *
 * Date: 2014��5��10��
 */
 
 
//Ĭ��ȫ������

var AFormConfig = {};
AFormConfig.defaultDelimiter = ",";//Ĭ���ַ����ָ��������ڴ���ѡ��Ķ��Ÿ�����ֵ
//����в���
AFormConfig.defaultAction = {
	"��" : "<a class='json_form_action' href='javascript:void(0)' title='����' onclick='var row = this.parentNode.parentNode;AFormHelper.addRow(row.parentNode.parentNode);'>��<a>",
	"��" : "<a class='json_form_action' href='javascript:void(0)' title='ɾ��' onclick='if(!confirm(\"ȷ��ɾ��������\"))return false;var row = this.parentNode.parentNode;AFormHelper.removeRow(row);'>��<a>"
};
//��ǩ
AFormConfig.tags = {
	"basicContainer" : "div",//div
	"objectContainer" : "fieldset",
	"label" : "label", //label
	"controlContainer" : "" //Ĭ��Ϊ��
};
//������ʽ��
AFormConfig.extClassName = {
	"basicContainer" : "form-group",
    "label" : "",
	"table" : "table table-bordered",
	"control" : "form-control",
    "controlContainer" : ""
};
//ģ��
AFormConfig.tpl = {
	"tips" : '&nbsp;<a title="{tips}" href="#nolink">[?]</a>',
	"thTips" : "<sup title='{tips}'>[?]</sup>"
};
//����
AFormConfig.wording = {
	"numText" : "���",
	"addRowText" : "����"
};

//������
AFormConfig.fn = {
	"onEmpty" : function(input,conf){
		var errMsg = conf ? ("�ֶ�["+(conf.label)+"]����Ϊ��") : input.title;
		if(!errMsg) errMsg = "�ֶ�["+(input.getAttribute("name"))+"]����Ϊ��";
		
		alert(errMsg);
		if(typeof input.focus == "function" || typeof input.focus == "object")
		{
			input.focus();
		}
	},
	"onInvalid" : function(input,conf){
		var errMsg = conf ? ("�ֶ�["+(conf.label)+"]��ֵ�Ƿ�") : input.title;
		if(!errMsg) errMsg = "�ֶ�["+(input.getAttribute("name"))+"]�Ƿ�";

		alert(errMsg);
		if(typeof input.focus == "function" || typeof input.focus == "object")
		{
			input.focus();
		}
	}
};



