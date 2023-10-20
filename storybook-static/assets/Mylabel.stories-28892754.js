import{j as q}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const t=({label:l="MyLabel",size:_="normal",allCaps:x=!1,color:M="primary",customFontColor:S})=>q.jsx("span",{className:`label ${_} text-${M}`,style:{color:`${S}`},children:x?l.toUpperCase():l});try{t.displayName="Mylabel",t.__docgenInfo={description:"",displayName:"Mylabel",props:{label:{defaultValue:{value:"MyLabel"},description:"what text should contain the label be?",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"How large should the label be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'}]}},allCaps:{defaultValue:{value:"false"},description:"",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},customFontColor:{defaultValue:null,description:"",name:"customFontColor",required:!1,type:{name:"string"}}}}}catch{}const $={title:"Example/Mylabel",component:t,tags:["autodocs"],argTypes:{color:{options:["primary","secondary","tertiary"],type:"select"}}},e={args:{size:"normal"}},a={args:{size:"normal",label:"Label",allCaps:!0}},r={args:{size:"normal",color:"secondary"}},o={args:{size:"normal",color:"tertiary"}},s={args:{size:"h1",customFontColor:"#5517ac"}};var n,c,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    size: 'normal'
  }
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,p,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: "normal",
    label: "Label",
    allCaps: true
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,y,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: "normal",
    color: 'secondary'
  }
}`,...(g=(y=r.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,C;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: "normal",
    color: 'tertiary'
  }
}`,...(C=(f=o.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var v,h,z;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: "h1",
    customFontColor: "#5517ac"
  }
}`,...(z=(h=s.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};const j=["basic","all_Caps","Secondary","Tertiari","CustomColor"];export{s as CustomColor,r as Secondary,o as Tertiari,j as __namedExportsOrder,a as all_Caps,e as basic,$ as default};
//# sourceMappingURL=Mylabel.stories-28892754.js.map
