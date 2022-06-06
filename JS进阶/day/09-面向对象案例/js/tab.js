var that;
class Tab {
    constructor(id) {
        that = this;
        this.main = document.querySelector(id)

        this.add = this.main.querySelector('.tabadd')
            // li的父元素
        this.ul = this.main.querySelector('.firstnav ul:first-child')
            // section 的父元素
        this.fsection = this.main.querySelector('.tabscon')
        this.init();
    }
    init() {
        this.update()
        this.add.onclick = this.addTab;

        // 初始化元素让相关元素绑定事件
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
            this.remove[i].onclick = this.removeTab;
            this.spans[i].ondbclick = this.editTab;
        }
    }
    update() {
        this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child');
        this.lis = document.querySelectorAll('li')
        this.sections = this.main.querySelectorAll('section')
        this.remove = this.main.querySelectorAll('.icon-guanbi')

    }

    // 1.切换功能
    toggleTab() {
            // console.log(this.index);
            that.clearClass();
            this.className = 'liactive';
            that.sections[this.index].className = 'conactive';
        }
        // 清除类
    clearClass() {
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].className = '';
                this.sections[i].className = '';

            }
        }
        //2. 添加功能
    addTab() {
            that.clearClass();
            var random = Math.random();
            // alert(11)
            // 1.创建li元素和section 元素
            var li = ' <li class="liactive"><span>测试1</span><span class="iconfont icon-guanbi"></span></li>'
            var section = '<section class="conactive">测试' + random + '</section>'
                // 追加到父元素的最后面
            that.ul.insertAdjacentHTML('beforeend', li);
            that.fsection.insertAdjacentHTML('beforeend', section);
            that.init();

        }
        // 3.删除功能
    removeTab(e) {
            e.stopPropagation(); //阻止冒泡 因为它的父亲也有点击事件
            var index = this.parentNode.index;
            // console.log(index);
            that.lis[index].remove();
            that.sections[index].remove();
            // 删除之后  数量又变了 所以重新获取一下
            that.init();
            // 当我们删除的不是选中状态的li的时候  原来选中状态的li保持不变
            if (document.querySelector('.liactive')) return; //如果能选中这个liactive这个就退出
            // 当我们删除选中状态的li的时候  让他的前一个小li处于选中状态
            index--;
            // 手动调用点击事件  不需要鼠标触发
            // 要有这个小li才能执行点击事件
            that.lis[index] && that.lis[index].click();
        }
        // 4.修改功能
    editTab() {
        var str = this.innerHTML;
        // 双击禁止选中文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = '<input type="text" />';
        var input = this.children[0];
        input.value = str;
        input.select(); //文本框文字处于选中状态
        // 当我们离开文本框就把文本框里的值 给span
        input.onblur = function() {
            this.parentNode.innerHTML = this.value;
        };
        input.onkeyup = function(e) {
            if (e.keyCode === 13) {
                // 手动调用失去焦点事件  不需要鼠标离开操作
                this.blur();
            }
        }
    }

}
new Tab('#tab');