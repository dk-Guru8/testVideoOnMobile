(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){e.exports=t.p+"static/media/apple.75677d54.svg"},18:function(e,a,t){"use strict";t.r(a);var n,i,l=t(0),o=t.n(l),s=t(3),c=t.n(s),r=(t(15),t(1)),d=t(4),m=t(5),p=t(7),h=t(6),y=t(8),u=(t(16),t(17),function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(p.a)(this,Object(h.a)(a).call(this,e))).state={apple:{xPos:537.5,yPos:388.5,width:200,height:200},percent:100,opacity:0},t}return Object(y.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;i=this.refs.vsCanvas,n=this.refs.vfAyba,this.startPlayback(),window.addEventListener("scroll",function(a){return e.handleScrollToElement(a)})}},{key:"componentWillUnmount",value:function(){var e=this;window.removeEventListener("scroll",function(a){return e.handleScrollToElement(a)}),console.log(this.refs.vfAyba)}},{key:"handleScrollToElement",value:function(e){e.srcElement.defaultView.scrollY<=1e3?this.setState({percent:100+e.srcElement.defaultView.scrollY*(1+e.srcElement.defaultView.scrollY/150)}):this.setState({percent:100+e.srcElement.defaultView.scrollY*(2+e.srcElement.defaultView.scrollY/100)})}},{key:"startPlayback",value:function(){var e=this;n.pause(),console.log(n),n.src="https://www.apple.com/105/media/us/iphone-se/2020/90024c0f-285a-4bf5-af04-2c38de97b06e/anim/arcade-loop/large.mp4",n.loop=!0,n.addEventListener("playing",function(){return e.paintVideo()})}},{key:"paintVideo",value:function(){var e=this;i.getContext("2d").drawImage(n,0,0,i.width,i.height),n.paused||requestAnimationFrame(function(){return e.paintVideo()})}},{key:"render",value:function(){var e,a=this.state.percent;return o.a.createElement("section",{className:"section section-a13 theme-dark","data-anim-scroll-group":"A13","data-analytics-section-engagement":"name:a13"},o.a.createElement("div",{className:"a13-intro icon-intro enhanced","data-component-list":"A13","data-analytics-xp":"null"},o.a.createElement("div",{className:"sticky-container sticky-scroll-height"},o.a.createElement("div",{className:"content-above-sticky"},o.a.createElement("div",{className:"section-content"},o.a.createElement("div",{className:"row align-items-center"},o.a.createElement("div",{className:"column large-8 large-offset-2 medium-10 medium-offset-1 small-11 small-offset-0"},o.a.createElement("h2",{className:"eyebrow-icon"},o.a.createElement("span",{className:"visuallyhidden"},"A13 Bionic")),o.a.createElement("h3",{className:"section-headline section-headline-space-below typography-section-headline-super will-change",style:{transform:"matrix(1, 0, 0, 1, 0, 0)",opacity:0}},"iPhone\xa011\xa0Pro called.",o.a.createElement("br",{className:"large-show small-hide"})," It\xa0wants its\xa0chip\xa0back."),o.a.createElement("p",{className:"base-only section-intro typography-section-intro-elevated"},"We put the brains of iPhone\xa011\xa0Pro in\xa0the\xa0body of iPhone\xa0SE. A13\xa0Bionic is the fastest chip ever in a smartphone, period. So everything feels fluid, whether you\u2019re launching apps, playing the latest games, or exploring new ways to work and play with augmented\xa0reality."))))),o.a.createElement("div",{className:"sticky-content"},o.a.createElement("div",{className:"sticky-overflow-hidden"},o.a.createElement("div",{className:"masked",style:{WebkitMaskSize:"".concat(a,"px")}},o.a.createElement("div",{className:"inline-video-container",style:{transform:"matrix(1.89137, 0, 0, 1.89137, 0, 0)"}},o.a.createElement("div",{className:"inline-video-media"},o.a.createElement("div",{style:{backgroundColor:"white",height:"100%",opacity:a<3e3?1:3e3/a,position:"relative",zIndex:2}}),o.a.createElement("video",(e={muted:!0,playsInline:"",loop:"1",ref:"vfAyba","data-video-source-basepath":"https://www.apple.com/105/media/us/iphone-se/2020/90024c0f-285a-4bf5-af04-2c38de97b06e/anim/arcade-loop/",className:"enhanced-only vp-large video-loaded video-can-play video-download-complete",src:"https://www.apple.com/105/media/us/iphone-se/2020/90024c0f-285a-4bf5-af04-2c38de97b06e/anim/arcade-loop/large.mp4",autoPlay:!0},Object(r.a)(e,"playsInline",!0),Object(r.a)(e,"loop",!0),e)),o.a.createElement("canvas",{ref:"vsCanvas",className:"mask enhanced-only",style:{width:"100%",height:"100%",zIndex:1}}),o.a.createElement("div",{className:"inline-video-frame-start no-inversion"})))),o.a.createElement("div",{className:"sticky-overlay enhanced-only will-change",style:{opacity:0}})),o.a.createElement("div",{className:"hero-transition-overlay","data-anim-tween":"{anchors;: [.section-a13], start: a0t - 100vh,end: a0t,opacity: [1, 0]}",style:{opacity:0}}),o.a.createElement("div",{className:"playback-control-container"},o.a.createElement("button",{className:"playback-control play disabled","data-aria-paused":"Play animation of video gameplay","data-aria-playing":"Pause animation of video gameplay","data-analytics-click-play":"prop3: play - a13","data-analytics-title-play":"play - a13","data-analytics-click-pause":"prop3: pause - a13","data-analytics-title-pause":"pause - a13","aria-label":"Play animation of video gameplay","data-analytics-click":"prop3: pause - a13","data-analytics-title":"pause - a13"}))))))}}]),a}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports=t(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.e1a33778.chunk.js.map