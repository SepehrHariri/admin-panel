"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[776],{790:(e,a,s)=>{s.d(a,{Sd:()=>t,Su:()=>d,aE:()=>i});var r=s(899);const t=r.Ik({username:r.Yj().required("Username is required").transform((e=>e&&e.toLowerCase())).matches(/^[a-zA-Z][a-zA-Z0-9]*$/,"Username must start with a letter and can only contain letters and numbers"),email:r.Yj().email().required("Email is required").matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,"Invalid email format"),password:r.Yj().required("Password is required").min(8,"Password must be at least 8 characters long").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"),confirmPassword:r.Yj().required("Confirm Password is required").oneOf([r.KR("password"),""],"Passwords must match")}),i=r.Ik({username:r.Yj().required("Username is required").transform((e=>e&&e.toLowerCase())).matches(/^[a-zA-Z][a-zA-Z0-9]*$/,"Username must start with a letter and can only contain letters and numbers"),password:r.Yj().required("Password is required").min(8,"Password must be at least 8 characters long").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character")}),d=r.Ik().shape({email:r.Yj().email().required("Email is required").matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,"Invalid email format"),username:r.Yj().required("Username is required").transform((e=>e&&e.toLowerCase())).matches(/^[a-zA-Z][a-zA-Z0-9]*$/,"Username must start with a letter and can only contain letters and numbers"),password:r.Yj().required("Password is required").min(8,"Password must be at least 8 characters long").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"),confirmPassword:r.Yj().required("Confirm Password is required").oneOf([r.KR("password"),""],"Passwords must match")})},782:(e,a,s)=>{s.r(a),s.d(a,{default:()=>u});var r=s(43),t=s(930),i=s(858),d=s(403),l=s(790),n=s(662),o=s(579);const m=e=>{var a,s;let{username:t,email:m,avatarUrl:c}=e;const[u,p]=(0,r.useState)(c),[h,x]=(0,r.useState)(!1),{register:w,handleSubmit:f,formState:{errors:j}}=(0,i.mN)({resolver:(0,d.t)(l.Su)});return(0,o.jsxs)("div",{className:"grid grid-cols-12 col-span-12 gap-4",children:[(0,o.jsx)("div",{className:"component-wrapper mb-7 col-span-12 md:col-span-8",children:(0,o.jsx)(n.Zp,{className:"p-5 ",children:(0,o.jsxs)("form",{onSubmit:f((e=>{x(!0)})),className:"flex flex-col gap-4","data-testid":"user-profile-form",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"mb-2 block",children:(0,o.jsx)(n.JU,{htmlFor:"email",value:"Your email"})}),(0,o.jsx)(n.ks,{id:"email",type:"email",placeholder:"name@xboard.com",defaultValue:m,...w("email"),helperText:(0,o.jsx)("span",{"data-testid":"email-error",className:"font-medium text-red-500",children:null===(a=j.email)||void 0===a?void 0:a.message}),"data-testid":"email-input","aria-invalid":!!j.email})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"mb-2 block",children:(0,o.jsx)(n.JU,{htmlFor:"username",value:"Your username"})}),(0,o.jsx)(n.ks,{id:"username",type:"text",placeholder:"Your username",defaultValue:t,...w("username"),helperText:(0,o.jsx)("span",{"data-testid":"username-error",className:"font-medium text-red-500",children:null===(s=j.username)||void 0===s?void 0:s.message}),"data-testid":"username-input","aria-invalid":!!j.username})]}),(0,o.jsxs)("div",{id:"fileUpload",children:[(0,o.jsx)("div",{className:"mb-2 block",children:(0,o.jsx)(n.JU,{htmlFor:"file",value:"Upload Picture"})}),(0,o.jsx)(n.zp,{id:"file",...w("file"),onChange:e=>(e=>{if(e&&e.length>0){const a=new FileReader;a.onload=e=>{var a;const s=null===(a=e.target)||void 0===a?void 0:a.result;"string"===typeof s&&p(s)},a.readAsDataURL(e[0])}})(e.target.files)}),(0,o.jsx)("div",{className:"text-gray-500 text-sm mt-1",children:"A profile picture is useful to confirm you are logged into your account."}),(0,o.jsx)(n.eu,{img:u,alt:"Avatar Preview",className:"float-right mt-2","data-testid":"avatar-image"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"mb-2 block",children:(0,o.jsx)(n.JU,{htmlFor:"password",value:"Your password"})}),(0,o.jsx)(n.ks,{id:"password",type:"password",...w("password"),"data-testid":"password-input","aria-invalid":!!j.password})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"mb-2 block",children:(0,o.jsx)(n.JU,{htmlFor:"confirmPassword",value:"Confirm password","data-testid":"confirm-password-input"})}),(0,o.jsx)(n.ks,{id:"confirmPassword",type:"password",...w("confirmPassword"),"aria-invalid":!!j.confirmPassword})]}),(0,o.jsx)(n.$n,{className:"w-fit",type:"submit","data-testid":"submit-button",children:"Update Profile"}),h&&(0,o.jsx)("div",{"data-testid":"success-message",className:"text-green-500 mt-4",children:"Profile updated successfully"})]})})}),(0,o.jsx)("div",{className:"component-wrapper mb-7 h-fit  col-span-12 md:col-span-4",children:(0,o.jsx)(n.Zp,{className:"p-5 ",children:(0,o.jsxs)("div",{className:"mt-6",children:[(0,o.jsx)("h3",{className:"text-lg font-bold mb-2 dark:text-white",children:"Actions"}),(0,o.jsx)("p",{className:"dark:text-white",children:"Explore new features, manage preferences, update your profile, and stay updated with our latest offerings."}),(0,o.jsx)(n.$n,{className:"bg-slate-900 text-sky-200 my-4",children:"Change Password"}),(0,o.jsx)(n.$n,{className:"bg-red-400 dark:bg-red-600 text-gray-700 dark:text-sky-500 my-4",children:"Delete Account"})]})})})]})};var c=s(84);const u=()=>{const e=c;return(0,o.jsx)(t.A,{children:(0,o.jsxs)("div",{className:"content-wrapper grid grid-cols-12",children:[(0,o.jsx)("h1",{className:"col-span-12 text-2xl font-bold text-gray-900 dark:text-white mb-7","data-testid":"profile-heading",children:"Update Profile"}),(0,o.jsx)(m,{username:"exampleUsername",email:"example@email.com",avatarUrl:e})]})})}},449:(e,a,s)=>{s.d(a,{A:()=>t});var r=s(43);const t=r.forwardRef((function(e,a){let{title:s,titleId:t,...i}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":t},i),s?r.createElement("title",{id:t},s):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"}))}))}}]);
//# sourceMappingURL=776.347f9e05.chunk.js.map