(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{302:function(e,t,n){"use strict";n.r(t);n(19);var o=n(277),r=n(282),d={data:function(){return{model_container:null,width:null,height:null,scene:null,renderer:null,camera:null,load_flag:!1}},props:["emit-width","emit-id"],mounted:function(){this.initModelContainer(),this.initScene(),this.initRenderer()},methods:{initModelContainer:function(){this.model_container=document.getElementById(this.emitId),this.width=this.emitWidth,this.height=this.emitWidth},initScene:function(){this.scene=new o.Y,this.camera=new o.Q(1.5,this.width/this.height,.1,1e3),this.camera.position.set(0,20,30),this.camera.lookAt(this.scene.position),this.renderer=new o.lb({antialias:!0,alpha:!0}),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.type=2,this.renderer.outputEncoding=o.mb,this.model_container.appendChild(this.renderer.domElement);var e=new o.a(10066329);this.scene.add(e);var t=new o.cb(15790320);t.position.set(-6,40,-10),this.scene.add(t);var n=new o.R(13434828,.5,100);n.castShadow=!0,n.position.set(-30,30,30),this.scene.add(n),this.loadModel()},initRenderer:function(){requestAnimationFrame(this.initRenderer),this.renderer.render(this.scene,this.camera)},loadModel:function(){var e=this,t=new r.a;return new Promise((function(n,r){t.load("/images/ring.glb",(function(t){var n=t.scene;n.rotation.x=Math.PI/.85,n.rotation.y=Math.PI/2.2,n.position.y=.275,n.position.x=-.05,n.scale.set(10,10,10),n.traverse((function(object){object instanceof o.F&&(object.castShadow=!0,object.receiveShadow=!0)})),e.scene.add(n),e.load_flag=!0}),(function(e){console.log(e.loaded/e.total*100+"% loaded")}),(function(e){console.log("error while loading",e),r("load model error",e)}))}))}}},h=n(13),component=Object(h.a)(d,(function(){return(0,this._self._c)("div",{attrs:{id:this.emitId}})}),[],!1,null,null,null);t.default=component.exports}}]);