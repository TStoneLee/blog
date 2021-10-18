# 基于富文本编辑器实现@功能
##### 说明：
业务（vue)上需要使用富文本编辑器留言，还需要带有提示人的功能，就是和百度贴吧或者豆瓣上的留言中的类似，我使用的是wangEditor富文本编辑器，以下是我实现的过程：（做了一些兼容，但是不是很完美，如果大佬可以指点一二，我将感激不尽）
本文参考了的文章链接：
1.[另一种场景下的js @提到好友](https://www.cnblogs.com/TheViper/p/4633745.html)
2.[web 前端 @ 功能 JS 实现分析及其原理](https://segmentfault.com/a/1190000007846897?_ea=18528484)
#### 正文
一、使用到的JavaScript对象：
1.[Range](https://developer.mozilla.org/zh-CN/docs/Web/API/Range)
Range对象表示的包含节点或者文本节点一段片段
2.[Selection](https://developer.mozilla.org/zh-CN/docs/Web/API/Selection)
Selection对象表示用户的光标开始位置到结束位置的选区
（以上是我的个人理解，具体的需要到MDN上查阅）
二、实现的原理
1.首先通过const selection = Window.getSelection(),
const range = selection.getrangeAt(0)获取光标的位置，我使用的是create-pos插件准确获取光标的位置
2.然后监听键盘事件,阻止输入@的默认行为，并且创建一个SPAN标签，内容为@，然后到光标处；
4.创建两个新的span标签，把@+选中的内容让放到其中一个新建的span标签中，另外一个span标签插入空格
5.创建一个fragment片段，把第四步中两个span标签一次插入fragment中
6.最后使用Range对象中的insertNode()方法插入富文本中
7.第6步完成之后，找到第4步创建并带有@的SPAN节点，然后移除
8.删除时，首先找到包含@+内容的节点，然后把整个节点一起删除
三、出现的问题
1.兼容性不好，在谷歌浏览器上表现最好（几乎没有bug)
2.可以在Firefox,IE,Chrome,Edge使用
四、代码地址： [源码](https://github.com/ThreeStonesLee/At-Someone)
