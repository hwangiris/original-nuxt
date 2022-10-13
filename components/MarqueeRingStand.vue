<template>
  <div :id="emitId"></div>
</template>

<script>
  import * as THREE from "three"
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

  export default {
    data () {
      return {
        model_container: null,
        width: null,
        height: null,
        scene: null,
        renderer: null,
        camera: null,
        load_flag: false,
      }
    },
    props: ['emit-width', 'emit-id'],
    mounted () {
      this.initModelContainer();
      this.initScene();
      this.initRenderer();
    },
    methods: {
      initModelContainer() {
        this.model_container = document.getElementById(this.emitId);
        // this.model_container.style.width = `${this.emitWidth}px`;
        this.width = this.emitWidth;
        this.height = this.emitWidth;
      },
      initScene() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
          1.5,
          this.width / this.height,
          0.1,
          1000
        );
        this.camera.position.set(0, 20, 30)
        this.camera.lookAt(this.scene.position);

        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(this.width, this.height);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.shadowMap.type = 2;
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.model_container.appendChild(this.renderer.domElement);

        // 設置環境光提供輔助柔和白光
        let ambientLight = new THREE.AmbientLight(0x999999);
        this.scene.add(ambientLight);

        // 設置聚光燈幫忙照亮物體
        let spotLight = new THREE.SpotLight(0xf0f0f0);
        spotLight.position.set(-6, 40, -10);
        this.scene.add(spotLight);

        let pointLight = new THREE.PointLight(0xccffcc, .5, 100)
        pointLight.castShadow = true; // 投影
        pointLight.position.set(-30, 30, 30);
        this.scene.add(pointLight);

        this.loadModel();
      },
      initRenderer() {
        requestAnimationFrame(this.initRenderer);
        this.renderer.render(this.scene, this.camera);
      },
      loadModel() {
        let that = this;

        let loader = new GLTFLoader()
        return new Promise(function(resolve, reject) {
          loader.load(
            "/images/ring.glb",
            gltf => {
              console.log(gltf.scene);
              let ringObj = gltf.scene;

              ringObj.rotation.x = Math.PI / 0.85;
              ringObj.rotation.y = Math.PI / 2.2;
              ringObj.position.y = 0.275;
              ringObj.position.x = -0.05;

              ringObj.scale.set(10, 10, 10);

              ringObj.traverse(function (object) {
                if (object instanceof THREE.Mesh) {
                  object.castShadow = true;
                  object.receiveShadow = true;
                }
              });

              that.scene.add(ringObj);
              that.load_flag = true;
            },

            xhr => {
              console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
            },

            error => {
              console.log("error while loading", error);
              reject("load model error", error);
            }
          )
        })
      },
    },
  }
</script>
