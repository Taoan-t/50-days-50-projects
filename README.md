# 1.如何导入字体？
- 选择常用字体库：https://fonts.google.com/
- 在style.css导入从字体库选择的URL
   `@import url("https://fonts.googleapis.com/css2?family=Muli&display=swap");`
- 使用导入的字体。字体的名字位于“family=”之后，“&display”之前
   `body {font-family:"Muli";}`
# 2.flexbox
- 默认的flex-direction的值是row，即子元素会按照从左到右的方向水平排列。flex-direction: column，表示子元素按照从上到下的方向垂直排列
- 如何设置：容器里有5个子元素，active状态的元素占的宽度是另外4个元素每个元素占的宽度的10倍？
  - code：
  `.container {display: flex;}
   .panel {flex:0.5;}
   .panel active {flex: 5;}`
  - flex:0.5,是flex-grow: 0.5; flex-shrink: 1; flex-basis: 0;的简写
# 3.设置absolute position
- 父元素设置为 `position: relative;`, 需要调整位置的子元素设置为`position: absolute;`,在子元素通过top, bottom, left,right来调整位置
- 代码：把h3放在panel的左下方位置
  `.panel { position: relative;}
   .panel h3 {position: absolute; left: 20px; bottom: 20px;}`
# 4. 给容器添加背景图片
- `<div style="background-image:url('...')"></div>`
- 调整图片的大小用background-size,调整图片的位置用background-postition
# 5.如何实现当屏幕宽度小于500px时，只显示3个panel，另外2个panel隐藏？
- 使用媒体查询，和pseudo class来实现
- 代码：`@media (max-width: 500px) {.panel:nth-of-type(4), .panel:nth-of-type(5){display:none;}}`
# 6.点击panel后，给class添加active状态
- 用querySelectorAll获取所有的panel elements, 再给每个panel element添加addEventListner来添加active到class
- 例子：expanding-card, script.js


  
