"use strict";(self.webpackChunkapp_test=self.webpackChunkapp_test||[]).push([[878],{7878:function(e,n,s){s.r(n),s.d(n,{default:function(){return y}});var r=s(5671),t=s(3144),o=s(136),i=s(7277),a=s(2791),l=s(5270),u=s(8687),c="Users_main_cont__iw3O0",g="Users_ava__5C6aZ",p={selectedPage:"Paginator_selectedPage__PAPMQ",pageList:"Paginator_pageList__Vrjg0",pageFlip:"Paginator_pageFlip__PjI8Y"},d=s(1694),f=s.n(d),h=s(4813),P=s(184),w=function(e){for(var n=e.itemsTotalCount,s=e.pageSize,r=e.currentPage,t=e.onPageChanged,o=(e.portionSize,Math.ceil(n/s)),i=[],a=1;a<=o;a++)i.push(a);return(0,P.jsx)("div",{className:p.paginator,children:(0,P.jsx)(h.Z,{className:f()(p.selectedPage,p.pageList),count:o,variant:"outlined",shape:"rounded",siblingCount:2,page:r,onChange:function(e,n){t(n)}})})},j=s(1087),x=s(9201),v=function(e){var n=e.user,s=e.followingInProgress,r=e.unfollow,t=e.follow;return(0,P.jsxs)("div",{className:c,children:[(0,P.jsxs)("span",{children:[(0,P.jsx)("div",{children:(0,P.jsx)(j.OL,{to:"/profile/"+n.id,children:(0,P.jsx)("img",{src:null!=n.photos.small?n.photos.small:x,className:g,alt:"UserPhoto"})})}),(0,P.jsx)("div",{children:n.followed?(0,P.jsx)("button",{disabled:s.some((function(e){return e===n.id})),onClick:function(){r(n.id)},children:"Unfollow"}):(0,P.jsx)("button",{disabled:s.some((function(e){return e===n.id})),onClick:function(){t(n.id)},children:"Follow"})})]}),(0,P.jsxs)("span",{children:[(0,P.jsxs)("span",{children:[(0,P.jsx)("div",{children:n.name}),(0,P.jsx)("div",{children:n.status})]}),(0,P.jsxs)("span",{children:[(0,P.jsx)("div",{children:"user.location.country"}),(0,P.jsx)("div",{children:"user.location.city"})]})]})]})},C=function(e){var n=e.totalUsersCount,s=e.pageSize,r=e.currentPage,t=e.onPageChanged,o=e.users,i=e.follow,a=e.unfollow,l=e.followingInProgress;return(0,P.jsxs)("div",{className:c,children:[(0,P.jsx)(w,{currentPage:r,onPageChanged:t,itemsTotalCount:n,pageSize:s}),o.map((function(e){return(0,P.jsx)(v,{user:e,unfollow:a,followingInProgress:l,follow:i},e.id)}))]})},m=s(5224),_=s(2409),S=s(7781),U=(0,s(6916).P1)((function(e){return e.usersState.users}),(function(e){return e})),z=function(e){return e.usersState.pageSize},I=function(e){return e.usersState.totalUsersCount},k=function(e){return e.usersState.currentPage},F=function(e){return e.usersState.isFetching},Z=function(e){return e.usersState.followingInProgress},b=function(e){(0,o.Z)(s,e);var n=(0,i.Z)(s);function s(){var e;(0,r.Z)(this,s);for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return(e=n.call.apply(n,[this].concat(o))).onPageChanged=function(n){var s=e.props.pageSize;e.props.requestUsers(n,s)},e}return(0,t.Z)(s,[{key:"componentDidMount",value:function(){var e=this.props,n=e.currentPage,s=e.pageSize;this.props.requestUsers(n,s)}},{key:"render",value:function(){return(0,P.jsx)(P.Fragment,{children:this.props.isFetching?(0,P.jsx)(m.Z,{}):(0,P.jsx)(C,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})})}}]),s}(a.Component),y=(0,S.qC)((0,u.$j)((function(e){return{users:U(e),pageSize:z(e),totalUsersCount:I(e),currentPage:k(e),isFetching:F(e),followingInProgress:Z(e)}}),{follow:l.ZN,unfollow:l.fv,setCurrentPage:l.D4,setIsFollowing:l.xs,requestUsers:l.D7}),_.n)(b)}}]);
//# sourceMappingURL=878.a9b7b054.chunk.js.map