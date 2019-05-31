# mind-reading
读心术，读取你心中所想数字

#### CSS布局
* 整体使用flex实现两栏居中布局
* 左栏盒内元素水平垂直居中
    * 自身设绝对定位，left和top设50%，配合C3属性transform:translate(-50%, -50%);
* 右栏使用grid实现网格平均分布
    * 单位fr，实现网格按比例分配
    * repeat()函数重复同样的值
    * grid-template-columns：定义每列列宽
    * grid-template-rows：定义每行行高