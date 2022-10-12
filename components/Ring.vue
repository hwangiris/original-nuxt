<template>
  <div id="scene-container" ref="sceneContainer"></div>
</template>

<script>
  import * as THREE from 'three'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

  export default {
    data () {
      return {
        container: null,
        scene: null,
        camera: null,
        controls: null,
        renderer: null,
        stats: null
      }
    },
    mounted () {
      this.init();
    },
    methods: {
      init () {
        let loader = new GLTFLoader()
        let self = this
        loader.load('@/assets/images/ring.glb', function (obj) {
          obj.scene.position.y = 1
          self.scene.add(obj.scene)
        }, function (xhr) {
          console.log((xhr.loaded / xhr.total * 100) + '% loaded')
        }, function (error) {
          console.error(error, 'load error!')
        })
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>