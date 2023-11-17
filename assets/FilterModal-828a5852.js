import{r as a,a as p,u as b,j as e,L as z,S as j,P as C}from"./index-e431ea01.js";import{C as M}from"./CartButton-da908247.js";function k({title:t,titleId:s,...l},r){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":s},l),t?a.createElement("title",{id:s},t):null,a.createElement("path",{d:"M6 12a.75.75 0 01-.75-.75v-7.5a.75.75 0 111.5 0v7.5A.75.75 0 016 12zM18 12a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5A.75.75 0 0118 12zM6.75 20.25v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0zM18.75 18.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 011.5 0zM12.75 5.25v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0zM12 21a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5A.75.75 0 0112 21zM3.75 15a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0zM12 11.25a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zM15.75 15a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0z"}))}const P=a.forwardRef(k),F=P;function B({title:t,titleId:s,...l},r){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":s},l),t?a.createElement("title",{id:s},t):null,a.createElement("path",{fillRule:"evenodd",d:"M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z",clipRule:"evenodd"}))}const I=a.forwardRef(B),R=I;function E({title:t,titleId:s,...l},r){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":s},l),t?a.createElement("title",{id:s},t):null,a.createElement("path",{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",clipRule:"evenodd"}))}const S=a.forwardRef(E),A=S,$=t=>{var o;const{addItemToCart:s,incrementQuantity:l,decrementQuantity:r}=p(),{cart:x}=b(n=>n.carts),c=x.some(n=>n.id===t.id),d=c?(o=x.find(n=>n.id===t.id))==null?void 0:o.count:0;return e.jsxs("div",{className:"relative bg-white text-gray-800 rounded-lg border border-gray-200 shadow-md transition-colors p-4 group",children:[e.jsxs("div",{className:"h-full flex flex-col",children:[e.jsxs(z,{to:`/product/${t.id}`,className:"h-full flex flex-col",children:[e.jsx("div",{className:"rounded-lg sm:rounded overflow-hidden",children:e.jsx("img",{src:t.image,alt:t.name,className:"w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"})}),e.jsx("h3",{className:"font-bold text-lg md:text-2xl pt-3 pb-2",children:t.name}),e.jsx("p",{className:"text-sm leading-5 text-gray-600 pb-6 flex-auto",children:t.ingredients})]}),e.jsx("div",{className:"flex items-center justify-between relative",children:e.jsx("div",{className:"font-bold text-xl",children:t.price+" ₽"})})]},t.id),e.jsxs("div",{className:"absolute bottom-4 right-4",children:[!c&&e.jsx(M,{onClick:()=>s(t)}),c&&e.jsxs("div",{className:"flex items-center gap-1 relative pt-4 group",children:[e.jsx(j,{onClick:()=>r({scenario:"remove",id:t.id}),textColor:"text-white",bgColor:"bg-amber-600",children:"-"}),e.jsxs("div",{className:"flex flex-col text-center",children:[e.jsx("span",{className:"font-semibold w-8 leading-4",children:d}),e.jsx("span",{className:"text-xs leading-3",children:"шт."})]}),e.jsx(j,{onClick:()=>l(t.id),textColor:"text-white",bgColor:"bg-amber-600",children:"+"}),e.jsx("span",{className:"text-sm text-gray-400 leading-3 absolute top-0 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:"В корзине"})]})]})]})},O=({title:t})=>e.jsx("h2",{className:"font-montserrat font-bold text-center sm:text-left text-4xl md:text-5xl text-amber-700",children:t}),Q=({text:t,dropdown:s,onClick:l})=>e.jsxs("button",{type:"button",onClick:l,className:"inline-flex w-full items-center justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-950 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 h-[36px]",children:[t,e.jsx(R,{className:"-mr-1 h-4 w-4 text-gray-400 transition-all"+(s?" rotate-180":"")})]}),X=({dropdown:t=!1,children:s})=>e.jsx(e.Fragment,{children:t&&e.jsx("ul",{className:"absolute right-0 top-[36px] w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 py-1.5 z-10",children:s})}),q=({text:t,onClick:s})=>e.jsxs("button",{type:"button",onClick:s,className:`inline-flex w-full items-center justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-950\r
            shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 h-[36px]`,children:[e.jsx(F,{className:"w-6 h-6"}),e.jsx("span",{className:"hidden sm:block",children:t})]}),L=({productName:t})=>{const{pizzasMinPrice:s,pizzasMaxPrice:l,sushiMinPrice:r,sushiMaxPrice:x}=b(h=>h.storage),c=t==="pizzas"?s:r,d=t==="pizzas"?l:x,[o,n]=a.useState(c),[u,f]=a.useState(d),[i,m]=a.useState(!1),{filterProductsByRangePrice:w}=p(),y=h=>{const g=parseInt(h.currentTarget.value.replace(/[^0-9]/g,""));g<=d?(n(g),m(!1)):(n(d),m(!0))},N=h=>{const g=h.currentTarget.value.replace(/[^0-9]/g,"");f(parseInt(g))},v=()=>{w({productName:t,valueFrom:o,valueTo:u})};return e.jsx("form",{children:e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsxs("div",{className:"flex flex-col gap-1 items-start relative",children:[e.jsx("label",{className:"text-gray-600 -mb-4 ml-2 block relative bg-white px-2",children:"От"}),e.jsx("input",{type:"text",placeholder:"Search..",className:"border rounded-md px-3 pt-3 pb-2 w-full outline-none",value:o??0,onChange:y,onBlur:()=>v()}),i&&e.jsx("p",{className:"text-red-600 text-sm",children:"Минимальная цена должна быть меньше максимальной"})]}),e.jsxs("div",{className:"flex flex-col gap-1 items-start relative",children:[e.jsx("label",{className:"text-gray-600 -mb-4 ml-2 block relative bg-white px-2",children:"До"}),e.jsx("input",{type:"text",placeholder:"Search..",className:"border rounded-md px-3 pt-3 pb-2 w-full outline-none",value:u??0,onChange:N,onBlur:()=>v()})]})]})})},T=({onClose:t,className:s})=>e.jsx("button",{onClick:t,className:s,children:e.jsx(A,{className:"w-7 h-7 fill-gray-600 stroke-1 stroke-gray-500"})}),G=({productName:t,onClose:s})=>{const{pizzasIngredients:l,sushiIngredients:r}=b(i=>i.storage),{filterProductsByIngedients:x,resetFilterProducts:c,resetFilterIngredients:d}=p(),[o,n]=a.useState(null),u=a.useMemo(()=>t==="pizzas"?l:r,[t,l,r]),f=(i,m)=>{if(x({productName:i,ingredient:m}),o===m){n(null),d(i);return}n(m)};return e.jsx(C,{onClose:s,children:e.jsxs("div",{className:"fixed z-10 top-0 right-0 w-screen sm:w-96 h-full bg-white shadow-2xl py-4 px-4 sm:px-6",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"font-bold text-2xl",children:"Фильтры"}),e.jsx("button",{className:"text-md text-amber-600 hover:text-red-300 transition-all underline underline-offset-4 decoration-dotted align-bottom",onClick:()=>c(t),children:"Сбросить"}),e.jsx(T,{onClose:s,className:"hover:rotate-90 transition-all"})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h3",{className:"font-bold text-xl mb-4",children:"Цены :"}),e.jsx(L,{productName:t})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-xl mb-4",children:"Ингидиенты :"}),e.jsx("div",{className:"gap-x-1 gap-y-1.5 flex flex-wrap",children:u.map(i=>e.jsx("div",{onClick:()=>f(t,i),className:"rounded-full px-3 cursor-pointer"+(o===i?" bg-amber-600 text-white":" text-gray-500  bg-gray-200"),children:i},i))})]})]})})};export{Q as D,q as F,O as P,G as a,X as b,$ as c};