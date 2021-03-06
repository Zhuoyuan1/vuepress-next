---
prev: false
next: /index/function.md
---
# 界面

## 介绍
`EasyDataBaseExport` 是一款数据库表结构导出工具，用以连接`MySQL`、`Oracle`、`SQLServer`等不同类型的数据库，并支持查看`表数据`和`结构`信息，快速形成丰富的数据库设计文档（`Word`、`Excel`等格式）。

## 页面

### 连接页面
![不使用别名引用](/images/1.png)  
  【菜单栏】点击`操作`菜单，有`导入连接...`和`退出`操作  

::: tip 提示
   查看`导入连接...`功能详细描述，请点击此链接[导入navicat的ncx文件](/index/function.html#五、导入navicat配置)  
:::
  【内容】  

  ① `ip` 和`端口`是必填项，要按照`ip:port`的格式输入（例：`127.0.0.1:3306`、`localhost:3306`）  
  ::: warning 注意
  ip和端口输入时要注意`:`的格式为英文半角字符
  ::: 
  ② `数据库类型`是`必填项`，有`MySQL`、`Oracle`、`SQlServer`选项，默认为`MySQL`  
  ③ `数据库`是`非必填项`，不填写连接时，显示完整的数据库；填写连接时，显示单一的数据库  
  ④ `用户名`是`必填项`，即数据库连接时的用户名  
  ⑤ `密码`是`非必填项`，即用户名的密码  

### 内容页面
![不使用别名引用](/images/2.png)  
【菜单栏】  

 ① `操作`包含`关闭连接`、`导入连接...`、`退出`    
 ② `主题`即可以更换其他UI主题，另外还可以还原默认主题  
 ③ `导出`包含`导出Word`、`导出Excle`  
 ④ `关于`即展示工具、作者等信息  

【界面】  

 `EasyDataBaseExport`界面分为左、中、右页面布局，其中左侧为`连接-数据库-表`的树状结构，中间部分显示`表结构`信息和`表数据`信息，右侧部分展示`常规`信息和`DLL`信息  
