# roleinfo组件说明：

## 组件实现：

1. 在列表同一级别单独创建了一个组件，用于弹窗。
2. 把Modal放到子组件，父组件通过props属性，给子组件传递是否隐藏，显示
    * 通过使用props属性，传值，子组件通过state状态保存
    * 子组件需要使用:
    ```js
    //使用该函数的目的是，当父组件props属性改变以后，会触发该函数
    //更改子组件的状态
    static getDerivedStateFromProps(nextProps, prevState){
      
    }
    ```
    * 子组件操作完毕，比如：完成添加操作，需要关闭当前窗口，需要通过
    回调函数为父组件赋值
    

   


