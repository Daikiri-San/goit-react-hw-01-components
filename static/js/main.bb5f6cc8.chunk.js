(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,,,,,,,,,,function(n){n.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(n){n.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(n){n.exports=JSON.parse('[{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/j04ntoh/128.jpg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mugukamil/128.jpg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg","name":"Poly","isOnline":false,"id":1284}]')},function(n){n.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,function(n,e,t){n.exports=t(23)},,,,,,,function(n,e,t){},function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(6),c=t.n(o),i=t(1),u=t(2);function l(){var n=Object(i.a)(["\n  width: 33.3%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem 0rem;\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  background-color: #ebedf0;\n\n  &:last-of-type {\n    border-right: none;\n    border-bottom-right-radius: 0.4rem;\n  }\n\n  &:first-of-type {\n    border-bottom-left-radius: 0.4rem;\n  }\n"]);return l=function(){return n},n}function m(){var n=Object(i.a)(["\n  font-size: 1.6rem;\n  font-weight: 500;\n"]);return m=function(){return n},n}function d(){var n=Object(i.a)(["\n  font-size: 1.3rem;\n  font-weight: 300;\n  color: rgba(0, 0, 0, 0.5);\n  margin-bottom: 0.4rem;\n"]);return d=function(){return n},n}function s(){var n=Object(i.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n"]);return s=function(){return n},n}var f=u.a.ul(s()),b=u.a.span(d()),p=u.a.span(m()),g=u.a.li(l());var y=function(n){var e=n.stats,t=e.followers,r=e.views,o=e.likes,c=/\d{1,3}(?=(\d{3})+(?!\d))/g;return a.a.createElement(f,null,a.a.createElement(g,null,a.a.createElement(b,null,"Followers"),a.a.createElement(p,null,t.toString().replace(c,"$&,"))),a.a.createElement(g,null,a.a.createElement(b,null,"Views"),a.a.createElement(p,null,r.toString().replace(c,"$&,"))),a.a.createElement(g,null,a.a.createElement(b,null,"Likes"),a.a.createElement(p,null,o.toString().replace(c,"$&,"))))};function v(){var n=Object(i.a)(["\n  font-size: 1.4rem;\n  font-weight: 300;\n  color: rgba(0, 0, 0, 0.5);\n  margin-bottom: 4rem;\n"]);return v=function(){return n},n}function w(){var n=Object(i.a)(["\n  font-size: 1.4rem;\n  font-weight: 300;\n  color: rgba(0, 0, 0, 0.5);\n  margin-bottom: 0.8rem;\n"]);return w=function(){return n},n}function h(){var n=Object(i.a)(["\n  font-size: 2rem;\n  font-weight: 500;\n  margin-bottom: 0.6rem;\n"]);return h=function(){return n},n}function x(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 4rem 4rem 0rem 4rem;\n"]);return x=function(){return n},n}function E(){var n=Object(i.a)(["\n  width: 12rem;\n  border-radius: 50%;\n  margin-bottom: 3rem;\n"]);return E=function(){return n},n}var j=u.a.img(E()),O=u.a.div(x()),k=u.a.p(h()),z=u.a.p(w()),S=u.a.p(v());function U(n){var e=n.name,t=n.tag,r=n.location,o=n.avatar,c=r;return a.a.createElement(O,null,a.a.createElement(j,{src:o,alt:"user avatar"}),a.a.createElement(k,null,e),a.a.createElement(z,null,"@",t),c&&a.a.createElement(S,null,r))}U.defaultProps={name:"Anonymous",avatar:"https://worldcup.com.ua/wp-content/uploads/2017/09/no-avatar-8.png",location:""};var J=U;function A(){var n=Object(i.a)(["\n  max-width: 30rem;\n  display: flex;\n  flex-direction: column;\n  margin-top: 4rem;\n  margin-left: 50%;\n  transform: translateX(-50%);\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);\n  background-color: snow;\n  border-radius: 0.4rem;\n  margin-bottom: 10rem;\n"]);return A=function(){return n},n}var P=u.a.div(A());var C=function(n){var e=n.user,t=e.name,r=e.tag,o=e.location,c=e.avatar,i=e.stats;return a.a.createElement(P,null,a.a.createElement(J,{name:t,tag:r,location:o,avatar:c}),a.a.createElement(y,{stats:i}))};function G(){var n=Object(i.a)(["\n  font-size: 1.6rem;\n  color: snow;\n"]);return G=function(){return n},n}function L(){var n=Object(i.a)(["\n  font-size: 1.2rem;\n  font-weight: 300;\n  margin-bottom: 0.4rem;\n  color: snow;\n"]);return L=function(){return n},n}function M(){var n=Object(i.a)(["\n  flex-basis: 20%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem 2rem;\n  background-color: ",";\n\n  &:last-of-type {\n    border-bottom-right-radius: 0.4rem;\n  }\n\n  &:first-of-type {\n    border-bottom-left-radius: 0.4rem;\n  }\n"]);return M=function(){return n},n}function D(){var n=Object(i.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n"]);return D=function(){return n},n}function N(){var n=Object(i.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: snow;\n  font-size: 2.2rem;\n  font-weight: 500;\n  padding: 2.2rem;\n  color: rgba(0, 0, 0, 0.7);\n"]);return N=function(){return n},n}function X(){var n=Object(i.a)(["\n  max-width: 30%;\n  display: flex;\n  flex-direction: column;\n  margin-left: 50%;\n  transform: translateX(-50%);\n  justify-content: center;\n  align-items: center;\n  background-color: snow;\n  border-bottom-right-radius: 0.4rem;\n  border-bottom-left-radius: 0.4rem;\n  margin-bottom: 10rem;\n"]);return X=function(){return n},n}function R(){var n=Math.floor(16777215*Math.random()).toString(16);return 5===n.length?"#0".concat(n):"#".concat(n)}var T=u.a.section(X()),F=u.a.title(N()),K=u.a.ul(D()),W=u.a.li(M(),(function(n){return n.color})),Y=u.a.span(L()),$=u.a.span(G());var q=function(n){var e=n.title,t=n.stats,r=e;return a.a.createElement(T,null,r&&a.a.createElement(F,null,e.toUpperCase()),a.a.createElement(K,null,t.map((function(n){var e=n.id,t=n.label,r=n.percentage;return a.a.createElement(W,{key:e,color:R()},a.a.createElement(Y,null,t),a.a.createElement($,null,r,"%"))}))))};function H(){var n=Object(i.a)(["\n  margin-left: 1rem;\n  font-size: 3rem;\n"]);return H=function(){return n},n}function _(){var n=Object(i.a)(["\n  margin-left: 1rem;\n  border-radius: 0.6rem;\n  width: 10rem;\n"]);return _=function(){return n},n}function B(){var n=Object(i.a)(["\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  background-color: ",";\n"]);return B=function(){return n},n}function I(){var n=Object(i.a)(["\n  min-width: 20rem;\n  max-width: 40rem;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 1rem;\n  background-color: snow;\n  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);\n  margin-bottom: 1rem;\n"]);return I=function(){return n},n}var V=u.a.li(I()),Q=u.a.span(B(),(function(n){return n.isOnline?"#19e320":"#fc2b2b"})),Z=u.a.img(_()),nn=u.a.p(H());function en(n){var e=n.avatar,t=n.name,r=n.isOnline;return a.a.createElement(V,null,a.a.createElement(Q,{isOnline:r}),a.a.createElement(Z,{src:e,alt:"user Avatar",width:"48"}),a.a.createElement(nn,null,t))}en.defaultProps={avatar:"https://worldcup.com.ua/wp-content/uploads/2017/09/no-avatar-8.png",name:"Anonymous"};var tn=en;function rn(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-left: 3rem;\n  margin-bottom: 10rem;\n"]);return rn=function(){return n},n}var an=u.a.ul(rn());var on=function(n){var e=n.friends;return a.a.createElement(an,null,e.map((function(n){var e=n.id,t=n.avatar,r=n.name,o=n.isOnline;return a.a.createElement(tn,{key:e,avatar:t,isOnline:o,name:r})})))};function cn(){var n=Object(i.a)(["\n  text-transform: capitalize;\n  font-weight: 300;\n  font-size: 1.6rem;\n  color: rgba(0, 0, 0, 0.6);\n  width: 33.3%;\n  text-align: center;\n  border: 0.1rem solid #d0d8d9;\n  padding: 2rem;\n"]);return cn=function(){return n},n}function un(){var n=Object(i.a)(["\n  background-color: snow;\n\n  &:last-of-type {\n    border-bottom-right-radius: 0.6rem;\n    border-bottom-left-radius: 0.6rem;\n  }\n\n  &:nth-of-type(even) {\n    background-color: #e1e7e8;\n  }\n"]);return un=function(){return n},n}function ln(){var n=Object(i.a)(["\n  width: 33.3%;\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 0.2rem;\n  font-size: 1.8rem;\n  font-weight: 500;\n  color: snow;\n  background-color: #13c9ed;\n  border-right: 0.1rem solid snow;\n  padding: 1.8rem;\n\n  &:first-of-type {\n    border-top-left-radius: 0.6rem;\n  }\n\n  &:last-of-type {\n    border-top-right-radius: 0.6rem;\n    border-right: none;\n  }\n"]);return ln=function(){return n},n}function mn(){var n=Object(i.a)(["\n  border-collapse: collapse;\n  min-width: 70%;\n  margin-left: 50%;\n  transform: translateX(-50%);\n  margin-bottom: 10rem;\n  border-top-left-radius: 0.6rem;\n  border-top-right-radius: 0.6rem;\n  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);\n"]);return mn=function(){return n},n}var dn=u.a.table(mn()),sn=u.a.th(ln()),fn=u.a.tr(un()),bn=u.a.td(cn());var pn=function(n){var e=n.items;return a.a.createElement(dn,null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement(sn,null,"Type"),a.a.createElement(sn,null,"Amount"),a.a.createElement(sn,null,"Currency"))),a.a.createElement("tbody",null,e.map((function(n){var e=n.id,t=n.type,r=n.amount,o=n.currency;return a.a.createElement(fn,{key:e},a.a.createElement(bn,null,t),a.a.createElement(bn,null,r),a.a.createElement(bn,null,o))}))))},gn=t(10),yn=t(11),vn=t(12),wn=t(13);t(22);var hn=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(C,{user:gn}),a.a.createElement(q,{title:"Upload stats",stats:yn}),a.a.createElement(on,{friends:vn}),a.a.createElement(pn,{items:wn}))};c.a.render(a.a.createElement(hn,null),document.querySelector("#root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.bb5f6cc8.chunk.js.map