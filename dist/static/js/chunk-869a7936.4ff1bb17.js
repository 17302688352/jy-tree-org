(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-869a7936"],{"2df4":function(e,t,n){"use strict";n.r(t);var d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content element-doc"},[e._m(0),e._m(1),n("p",[e._v("可以设置类似的data数据格式来生成树形组织图，并可以通过style精确配置每个节点的样式或className精确配置每个节点的class名")]),e._m(2),n("br"),n("demo-block",[n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n      <div style="display: flex; padding: 10px 0;">\n        <div style="margin-right: 10px"><i-switch v-model="horizontal"></i-switch> 横向</div>\n        <div style="margin-right: 10px"><i-switch v-model="collapsable"></i-switch> 可收起</div>\n        <div style="margin-right: 10px"><i-switch v-model="disaled"></i-switch> 禁止编辑</div>\n        <div style="margin-right: 10px"><i-switch v-model="onlyOneNode"></i-switch> 仅拖动当前节点</div>\n        <div style="margin-right: 10px"><i-switch v-model="cloneNodeDrag"></i-switch> 拖动节点副本</div>\n    </div>\n    <div style="padding-bottom:10px">\n      背景色：\n      <color-picker v-model="style.background" size="small"></color-picker>&nbsp;\n      文字颜色：\n      <color-picker v-model="style.color" size="small"></color-picker>&nbsp;\n      搜索：\n      <input type="text" v-model="keyword" placeholder="请输入搜索内容" @keydown.enter="filter" />\n    </div>\n    <div style="height: 400px; border:1px solid #eee">\n      <zm-tree-org\n        ref="tree"\n        :data="data"\n        :disabled="disaled"\n        :horizontal="horizontal"      \n        :collapsable="collapsable"\n        :label-style="style"\n        :node-draggable="true"\n        :default-expand-level="1"\n        :only-one-node="onlyOneNode"\n        :clone-node-drag="cloneNodeDrag"\n        :node-draging="nodeDragMove"\n        :node-drag-end="nodeDragEnd"\n        :toolBar="toolBar"\n        :filterNodeMethod="filterNodeMethod"\n        @on-contextmenu="onMenus"\n        @on-expand="onExpand"\n        @on-node-click="onNodeClick"\n        @on-node-dblclick="onNodeDblclick"\n        @on-node-copy="onNodeCopy"\n      >\n        \x3c!-- 自定义节点内容 --\x3e\n        \x3c!-- <template slot-scope="{node}">\n          <div class="tree-org-node__text node-label">{{node.label + node.id}}</div>\n        </template> --\x3e\n        \x3c!-- 自定义展开按钮 --\x3e\n        <template v-slot:expand="{node}">\n          <div>{{node.children.length}}</div>\n        </template>\n      </zm-tree-org>\n    </div>\n  </div>\n</template>\n<script>\n    export default {\n      data(){\n        return {\n          toolBar: {\n            scale: false\n          },\n          keyword: \'\',\n          data: {\n            id: 1,\n            label: "xxx科技有限公司",\n            children: [\n              {\n                id: 2,\n                pid: 1,\n                label: "产品研发部",\n                style: { color:\'#fff\', background:\'#108ffe\' },\n                expand: false,\n                children: [\n                  {\n                    id: 6,\n                    pid: 2,\n                    label: "禁止编辑节点",\n                    disabled: true,\n                  },\n                  {\n                    id: 7,\n                    pid: 2,\n                    label: "研发-后端"\n                  },\n                  {\n                    id: 8,\n                    pid: 2,\n                    label: "禁止拖拽节点",\n                    noDragging: true\n                  },\n                  {\n                    id: 9,\n                    pid: 2,\n                    label: "产品经理"\n                  },\n                  {\n                    id: 10,\n                    pid: 2,\n                    label: "测试"\n                  }\n                ]\n              },\n              {\n                id: 3,\n                pid: 1,\n                label: "客服部",\n                children: [\n                  {\n                    id: 11,\n                    pid: 3,\n                    label: "客服一部"\n                  },\n                  {\n                    id: 12,\n                    pid: 3,\n                    label: "客服二部"\n                  }\n                ]\n              },\n              {\n                id: 4,\n                pid: 1,\n                label: "业务部"\n              },\n              {\n                id: 5,\n                pid: 1,\n                label: "人力资源中心"\n              }\n            ]\n          },\n          horizontal: false,\n          collapsable: true,\n          onlyOneNode: true,\n          cloneNodeDrag: true,\n          expandAll: true,\n          disaled: false,\n          style: {\n            background:\'#fff\',\n            color:\'#5e6d82\'\n          }     \n        } \n      },\n      created(){\n          // this.toggleExpand(this.data, this.expandAll);\n      }, \n      methods:{\n        onMenus({node, command}) {\n          console.log(node, command)\n        },\n        filter(){\n          this.$refs.tree.filter(this.keyword)\n        },\n        filterNodeMethod(value, data) {\n          if (!value) return true;\n          return data.label.indexOf(value) !== -1;\n        },\n          onExpand(e, data) {\n            console.log(e, data)\n          },\n          nodeDragMove(data){\n            console.log(data)\n          },\n          nodeDragEnd(data, isSelf){\n            console.log(data, isSelf)\n            isSelf && this.$Message.info("移动到自身")\n          },\n          onNodeClick(e, data) {\n            this.$Message.info(data.label)\n          },\n          onNodeDblclick(){\n            this.$Message.info("双击节点")\n          },\n          onNodeCopy(){\n            this.$Message.success("复制成功")\n          },\n          handleNodeAdd(node){\n            console.log(node)\n            this.$Message.info("新增节点")\n          },\n          expandChange() {\n            this.toggleExpand(this.data, this.expandAll);\n          },\n          toggleExpand(data, val) {\n            if (Array.isArray(data)) {\n              data.forEach(item => {\n                this.$set(item, "expand", val);\n                if (item.children) {\n                  this.toggleExpand(item.children, val);\n                }\n              });\n            } else {\n              this.$set(data, "expand", val);\n              if (data.children) {\n                this.toggleExpand(data.children, val);\n              }\n            }\n          }\n      }  \n    }\n<\/script>\n')])])])],2),e._m(3),e._m(4),e._m(5),e._m(6),e._m(7),e._m(8),e._m(9),e._m(10),e._m(11)],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",{attrs:{id:"demo-yan-shi-an-li"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#demo-yan-shi-an-li"}},[e._v("$")]),e._v(" Demo 演示案例")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{attrs:{id:"ji-chu-yong-fa"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-yong-fa"}},[e._v("$")]),e._v(" 基础用法")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._v("注：\n1.如果需要拖动节点，或新增、编辑和删除节点功能，则节点必须有id（节点唯一标识）和pid（父级节点唯一标识）属性\n或者通过props指定id和pid属性\n2.由于节点拖拽功能阻止了节点文本选中，所以，在右键菜单中提供了复制节点文本功能。\n")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{attrs:{id:"attributes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#attributes"}},[e._v("$")]),e._v(" Attributes")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[n("thead",[n("tr",[n("th",[e._v("参数")]),n("th",[e._v("说明")]),n("th",[e._v("类型")]),n("th",[e._v("可选值")]),n("th",[e._v("默认值")])])]),n("tbody",[n("tr",[n("td",[e._v("data")]),n("td",[e._v("数据源,必须传入")]),n("td",[e._v("Object")]),n("td",[e._v("—")]),n("td",[e._v("—")])]),n("tr",[n("td",[e._v("props")]),n("td",[e._v("结构map参考")]),n("td",[e._v("Object")]),n("td",[e._v("—")]),n("td",[e._v("{id: 'id', pid: 'pid', label: 'label', expand: 'expand',children: 'children' }")])]),n("tr",[n("td",[e._v("tool-bar")]),n("td",[e._v("工具栏")]),n("td",[e._v("[Object, Boolean]")]),n("td",[e._v("—")]),n("td",[e._v("{scale: true, restore: true, expand: true, zoom: true, fullscreen: true, }")])]),n("tr",[n("td",[e._v("horizontal")]),n("td",[e._v("是否是横向")]),n("td",[e._v("Boolean")]),n("td",[e._v("true,false")]),n("td",[e._v("false")])]),n("tr",[n("td",[e._v("collapsable")]),n("td",[e._v("是否可以展开收起节点")]),n("td",[e._v("Boolean")]),n("td",[e._v("true,false")]),n("td",[e._v("false")])]),n("tr",[n("td",[e._v("filter-node-method")]),n("td",[e._v("对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏")]),n("td",[e._v("Function(value, data)")]),n("td",[e._v("——")]),n("td",[e._v("——")])]),n("tr",[n("td",[e._v("default-expand-level")]),n("td",[e._v("默认展开层级（如果层级内有节点展开属性值为false，该节点不会默认展开）")]),n("td",[e._v("Number")]),n("td",[e._v("——")]),n("td",[e._v("——")])]),n("tr",[n("td",[e._v("disabled")]),n("td",[e._v("禁止编辑，设为true后，所有节点不可新增下级、编辑和删除，单个节点禁止编辑，可将节点属性设置disabled为true")]),n("td",[e._v("Boolean")]),n("td",[e._v("true,false")]),n("td",[e._v("true")])]),n("tr",[n("td",[e._v("draggable")]),n("td",[e._v("架构图是否可拖拽，单个节点禁止拖拽，可将节点属性设置noDragging为true")]),n("td",[e._v("Boolean")]),n("td",[e._v("true,false")]),n("td",[e._v("true")])]),n("tr",[n("td",[e._v("scalable")]),n("td",[e._v("架构图是否可缩放")]),n("td",[e._v("Boolean")]),n("td",[e._v("true,false")]),n("td",[e._v("true")])]),n("tr",[n("td",[e._v("draggable-on-node")]),n("td",[e._v("架构图拖拽在节点触发，node-draggable值为false时，设为true才有效")]),n("td",[e._v("Boolean")]),n("td",[e._v("true,false")]),n("td",[e._v("false")])]),n("tr",[n("td",[e._v("node-draggable")]),n("td",[e._v("节点是否可拖拽")]),n("td",[e._v("Boolean")]),n("td",[e._v("true,false")]),n("td",[e._v("true")])]),n("tr",[n("td",[e._v("clone-node-drag")]),n("td",[e._v("是否拷贝节点拖拽")]),n("td",[e._v("Boolean")]),n("td",[e._v("true,false")]),n("td",[e._v("true")])]),n("tr",[n("td",[e._v("only-one-node")]),n("td",[e._v("是否仅拖动当前节点，如果true，仅拖动当前节点，子节点自动添加到当前节点父节点，如果false，则当前节点及子节点一起拖动")]),n("td",[e._v("Boolean")]),n("td",[e._v("true,false")]),n("td",[e._v("true")])]),n("tr",[n("td",[e._v("node-add")]),n("td",[e._v("自定义节点新增，覆盖默认新增行为（参数当前节点node）")]),n("td",[e._v("Function")]),n("td",[e._v("—")]),n("td",[e._v("—")])]),n("tr",[n("td",[e._v("node-delete")]),n("td",[e._v("自定义节点删除，覆盖默认新增行为（参数当前节点node）")]),n("td",[e._v("Function")]),n("td",[e._v("—")]),n("td",[e._v("—")])]),n("tr",[n("td",[e._v("node-edit")]),n("td",[e._v("自定义节点编辑，覆盖默认新增行为（参数当前节点node）")]),n("td",[e._v("Function")]),n("td",[e._v("—")]),n("td",[e._v("—")])]),n("tr",[n("td",[e._v("node-copy")]),n("td",[e._v("复制节点文本，覆盖默认复制节点文本行为（参数当前节点node）")]),n("td",[e._v("Function")]),n("td",[e._v("—")]),n("td",[e._v("—")])]),n("tr",[n("td",[e._v("define-menus")]),n("td",[e._v("自定义右键菜单，接受包含name和command属性的对象数组")]),n("td",[e._v("Array")]),n("td",[e._v("[{ name: '复制文本', command: 'copy' },{ name: '新增节点', command: 'add' },{ name: '编辑节点', command: 'edit' },{ name: '删除节点', command: 'delete' }]")]),n("td",[e._v("—")])]),n("tr",[n("td",[e._v("render-content")]),n("td",[e._v("渲染函数")]),n("td",[e._v("Function")]),n("td",[e._v("—")]),n("td",[e._v("—")])]),n("tr",[n("td",[e._v("label-style")]),n("td",[e._v("自定义label标签的样式")]),n("td",[e._v("Object")]),n("td",[e._v("—")]),n("td",[e._v("—")])]),n("tr",[n("td",[e._v("label-class-name")]),n("td",[e._v("自定义label节点的样式名")]),n("td",[e._v("[Function, String]")]),n("td",[e._v("—")]),n("td",[e._v("—")])]),n("tr",[n("td",[e._v("click-delay")]),n("td",[e._v("单机事件延迟（毫秒），解决双击鼠标时同时触发单击事件问题")]),n("td",[e._v("Number")]),n("td",[e._v("—")]),n("td",[e._v("260")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._v("注：\n1.如果需要拖动节点，或新增、编辑和删除节点功能，则节点必须有id（节点唯一标识）和pid（父级节点唯一标识）属性\n或者通过props指定id和pid属性\n2.由于节点拖拽功能阻止了节点文本选中，所以，在右键菜单中提供了复制节点文本功能。\n")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{attrs:{id:"events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("$")]),e._v(" Events")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[n("thead",[n("tr",[n("th",[e._v("事件名")]),n("th",[e._v("说明")]),n("th",[e._v("返回值")])])]),n("tbody",[n("tr",[n("td",[e._v("on-expand")]),n("td",[e._v("节点展开事件，注意，展开节点时如监听了label点击事件，则需要阻止冒泡 e.stopPropagation()")]),n("td",[e._v("e, data")])]),n("tr",[n("td",[e._v("on-node-click")]),n("td",[e._v("节点点击事件")]),n("td",[e._v("e, data")])]),n("tr",[n("td",[e._v("on-node-dblclick")]),n("td",[e._v("节点双击事件")]),n("td",[e._v("e, data")])]),n("tr",[n("td",[e._v("on-node-focus")]),n("td",[e._v("节点获取焦点事件")]),n("td",[e._v("e, data")])]),n("tr",[n("td",[e._v("on-node-blur")]),n("td",[e._v("节点失去焦点事件")]),n("td",[e._v("e, data")])]),n("tr",[n("td",[e._v("on-node-copy")]),n("td",[e._v("复制节点文本事件，如果设置了node-copy属性，此事件将不会执行")]),n("td",[e._v("复制的文本")])]),n("tr",[n("td",[e._v("on-node-delete")]),n("td",[e._v("删除节点事件，如果设置了node-delete属性，此事件将不会执行")]),n("td",[e._v("删除的节点")])]),n("tr",[n("td",[e._v("on-contextmenu")]),n("td",[e._v("右键菜单点击事件")]),n("td",[e._v("{command, node}")])]),n("tr",[n("td",[e._v("on-zoom")]),n("td",[e._v("缩放事件")]),n("td",[e._v("scale缩放倍数")])]),n("tr",[n("td",[e._v("on-drag")]),n("td",[e._v("拖拽事件")]),n("td",[e._v("x, y")])]),n("tr",[n("td",[e._v("on-drag-stop")]),n("td",[e._v("拖拽结束事件")]),n("td",[e._v("x, y")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{attrs:{id:"methods"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[e._v("$")]),e._v(" Methods")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[n("thead",[n("tr",[n("th",[e._v("事件名")]),n("th",[e._v("说明")]),n("th",[e._v("返回值")])])]),n("tbody",[n("tr",[n("td",[e._v("filter")]),n("td",[e._v("对树节点进行筛选操作")]),n("td",[e._v("接收一个任意类型的参数，该参数会在 filter-node-method 中作为第一个参数")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{attrs:{id:"slot"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#slot"}},[e._v("$")]),e._v(" Slot")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[n("thead",[n("tr",[n("th",[e._v("name")]),n("th",[e._v("说明")])])]),n("tbody",[n("tr",[n("td",[e._v("—")]),n("td",[e._v("自定义节点内容，参数为 { node }")])]),n("tr",[n("td",[e._v("expand")]),n("td",[e._v("自定义节点展开按钮内容，参数为 { node }")])])])])}],o=n("5530"),l=(n("4de4"),n("d3b7"),n("159b"),{name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("div",[n("div",{staticStyle:{display:"flex",padding:"10px 0"}},[n("div",{staticStyle:{"margin-right":"10px"}},[n("i-switch",{model:{value:e.horizontal,callback:function(t){e.horizontal=t},expression:"horizontal"}}),e._v(" 横向")],1),e._v(" "),n("div",{staticStyle:{"margin-right":"10px"}},[n("i-switch",{model:{value:e.collapsable,callback:function(t){e.collapsable=t},expression:"collapsable"}}),e._v(" 可收起")],1),e._v(" "),n("div",{staticStyle:{"margin-right":"10px"}},[n("i-switch",{model:{value:e.disaled,callback:function(t){e.disaled=t},expression:"disaled"}}),e._v(" 禁止编辑")],1),e._v(" "),n("div",{staticStyle:{"margin-right":"10px"}},[n("i-switch",{model:{value:e.onlyOneNode,callback:function(t){e.onlyOneNode=t},expression:"onlyOneNode"}}),e._v(" 仅拖动当前节点")],1),e._v(" "),n("div",{staticStyle:{"margin-right":"10px"}},[n("i-switch",{model:{value:e.cloneNodeDrag,callback:function(t){e.cloneNodeDrag=t},expression:"cloneNodeDrag"}}),e._v(" 拖动节点副本")],1)]),e._v(" "),n("div",{staticStyle:{"padding-bottom":"10px"}},[e._v("\n      背景色：\n      "),n("color-picker",{attrs:{size:"small"},model:{value:e.style.background,callback:function(t){e.$set(e.style,"background",t)},expression:"style.background"}}),e._v(" \n      文字颜色：\n      "),n("color-picker",{attrs:{size:"small"},model:{value:e.style.color,callback:function(t){e.$set(e.style,"color",t)},expression:"style.color"}}),e._v(" \n      搜索：\n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.keyword,expression:"keyword"}],attrs:{type:"text",placeholder:"请输入搜索内容"},domProps:{value:e.keyword},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.filter.apply(null,arguments)},input:function(t){t.target.composing||(e.keyword=t.target.value)}}})],1),e._v(" "),n("div",{staticStyle:{height:"400px",border:"1px solid #eee"}},[n("zm-tree-org",{ref:"tree",attrs:{data:e.data,disabled:e.disaled,horizontal:e.horizontal,collapsable:e.collapsable,"label-style":e.style,"node-draggable":!0,"default-expand-level":1,"only-one-node":e.onlyOneNode,"clone-node-drag":e.cloneNodeDrag,"node-draging":e.nodeDragMove,"node-drag-end":e.nodeDragEnd,toolBar:e.toolBar,filterNodeMethod:e.filterNodeMethod},on:{"on-contextmenu":e.onMenus,"on-expand":e.onExpand,"on-node-click":e.onNodeClick,"on-node-dblclick":e.onNodeDblclick,"on-node-copy":e.onNodeCopy},scopedSlots:e._u([{key:"expand",fn:function(t){var d=t.node;return[n("div",[e._v(e._s(d.children.length))])]}}])})],1)])]],2)},t=[],n={data:function(){return{toolBar:{scale:!1},keyword:"",data:{id:1,label:"xxx科技有限公司",children:[{id:2,pid:1,label:"产品研发部",style:{color:"#fff",background:"#108ffe"},expand:!1,children:[{id:6,pid:2,label:"禁止编辑节点",disabled:!0},{id:7,pid:2,label:"研发-后端"},{id:8,pid:2,label:"禁止拖拽节点",noDragging:!0},{id:9,pid:2,label:"产品经理"},{id:10,pid:2,label:"测试"}]},{id:3,pid:1,label:"客服部",children:[{id:11,pid:3,label:"客服一部"},{id:12,pid:3,label:"客服二部"}]},{id:4,pid:1,label:"业务部"},{id:5,pid:1,label:"人力资源中心"}]},horizontal:!1,collapsable:!0,onlyOneNode:!0,cloneNodeDrag:!0,expandAll:!0,disaled:!1,style:{background:"#fff",color:"#5e6d82"}}},created:function(){},methods:{onMenus:function(e){var t=e.node,n=e.command;console.log(t,n)},filter:function(){this.$refs.tree.filter(this.keyword)},filterNodeMethod:function(e,t){return!e||-1!==t.label.indexOf(e)},onExpand:function(e,t){console.log(e,t)},nodeDragMove:function(e){console.log(e)},nodeDragEnd:function(e,t){console.log(e,t),t&&this.$Message.info("移动到自身")},onNodeClick:function(e,t){this.$Message.info(t.label)},onNodeDblclick:function(){this.$Message.info("双击节点")},onNodeCopy:function(){this.$Message.success("复制成功")},handleNodeAdd:function(e){console.log(e),this.$Message.info("新增节点")},expandChange:function(){this.toggleExpand(this.data,this.expandAll)},toggleExpand:function(e,t){var n=this;Array.isArray(e)?e.forEach((function(e){n.$set(e,"expand",t),e.children&&n.toggleExpand(e.children,t)})):(this.$set(e,"expand",t),e.children&&this.toggleExpand(e.children,t))}}};return Object(o["a"])({render:e,staticRenderFns:t},n)}()}}),r=l,i=n("2877"),s=Object(i["a"])(r,d,a,!1,null,null,null);t["default"]=s.exports},"44a4":function(e,t,n){"use strict";n.r(t);var d=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content element-doc"},[n("h2",{attrs:{id:"jie-shao"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jie-shao"}},[e._v("$")]),e._v(" 介绍")]),n("p",[e._v("一个简易版组织架构图，组件依赖于"),n("a",{attrs:{href:"https://github.com/hukaibaihu/vue-org-tree"}},[e._v("vue-org-tree")]),e._v("， 在此基础上将部分源代码进行优化修改。增加鼠标拖拽和鼠标滚轮缩放，并支持节点拖拽，以及节点编辑等功能。")]),n("div",{staticClass:"tip"},[n("p",[e._v("vue3.x版本请访问 "),n("a",{attrs:{href:"https://sangtian152.github.io/vue3-tree-org/"}},[e._v("vue3-tree-org")])])]),n("h2",{attrs:{id:"an-zhuang"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#an-zhuang"}},[e._v("$")]),e._v(" 安装")]),n("p",[n("code",[e._v("@1.5.1")]),e._v(" 表示版本号，建议锁定版本号来保证代码的稳定性")]),n("h3",{attrs:{id:"npm-an-zhuang"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#npm-an-zhuang"}},[e._v("$")]),e._v(" npm 安装")]),n("p",[e._v("推荐使用npm安装，它能更好地和"),n("a",{attrs:{href:"https://webpack.js.org/"}},[e._v("webpack")]),e._v("打包工具配合使用。而且可以更好的和 es6配合使用。并且支持按需引入")]),n("pre",[n("code",{staticClass:"language-shell"},[e._v("npm i zm-tree-org -S\n# or \nyarn add zm-tree-org\n")])]),n("h3",{attrs:{id:"yin-ru"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#yin-ru"}},[e._v("$")]),e._v(" 引入")]),n("p",[e._v("在 main.js 中写入以下内容：")]),n("pre",[n("code",{staticClass:"language-javascript"},[e._v("import Vue from 'vue';\nimport ZmTreeOrg from 'zm-tree-org';\nimport \"zm-tree-org/lib/zm-tree-org.css\";\n\nVue.use(ZmTreeOrg);\n")])]),n("h3",{attrs:{id:"zui-xin-ban-ben"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zui-xin-ban-ben"}},[e._v("$")]),e._v(" 最新版本")]),n("p",[n("a",{attrs:{href:"https://www.npmjs.com/package/zm-tree-org"}},[n("img",{attrs:{src:"https://img.shields.io/npm/v/zm-tree-org",alt:"NPM version"}})])])])}],o=n("2877"),l={},r=Object(o["a"])(l,d,a,!1,null,null,null);t["default"]=r.exports},ef23:function(e,t,n){var d={"./demo.md":"2df4","./guide.md":"44a4"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(d,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return d[e]}a.keys=function(){return Object.keys(d)},a.resolve=o,e.exports=a,a.id="ef23"}}]);
//# sourceMappingURL=chunk-869a7936.4ff1bb17.js.map