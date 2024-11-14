<template lang="pug">
  #TContainer
</template>

<script>
import * as THREE from "three";
export default {
  name: 'ThreeBack',
  data() {
    return {
      background1:"images/01.png",
      background2:"images/02.png",
      background3:"images/03.png",
      width:  window.innerWidth,
      height: window.innerHeight,
      count:0,
      planes:[],
      transparentMaterial:null,
      centerBallMaterial:null,
      ballMaterial:null,
      cantBalls:100,
      cantParticlesBackground:3,
      nodesActives : [],
      particules:[],
      background:'255,0,255 ',
      background22:'26,33,39 ',
      colorBaseBall:'28,35,41',
      colorCenterBall:'31,38,44',
      alpha:1,
    };
  },
  methods: {
        animationParticules(){
            this.count = this.count + 1 < (this.cantBalls) ? this.count + 1 : 1
            const node = this.planes[this.count-1]
            const delayNodes = 25
            const growDelay = 0.04
            let nodeScale = 0.5
            //console.log(this.nodesActives[0])
            for(let i of this.nodesActives){
                const nodeClean = this.planes[i - 1]
                nodeClean.scale.set(0,0)
                nodeClean.material =  this.ballMaterial
            }
            this.nodesActives= []
            for(let i = delayNodes; i > 0; i--){
                const lastTemp = (this.count - i >= 1) ?  this.count - i :  (this.cantBalls ) - i
                const nodeLast = this.planes[lastTemp -1]
                const nextTemp = ((this.count + i) < this.cantBalls) ?  this.count + i :  1
                const nodeNext = this.planes[nextTemp - 1]
                if(this.nodesActives.indexOf(lastTemp) == -1){
                    this.nodesActives.push(lastTemp)
                }
                nodeNext.scale.set(nodeScale,nodeScale)
                nodeLast.material = this.ballMaterial
                nodeLast.scale.set(nodeScale,nodeScale)
                nodeScale += growDelay
            }
            nodeScale += growDelay*2
            node.scale.set(nodeScale,nodeScale)
            node.material = this.centerBallMaterial
        },
        animationBackground(){
            if(this.back1){
              this.back1.rotation.z += 0.004
              this.back3.rotation.z -= 0.02
            }
            
            
        },
        createScene(){
            let container = document.getElementById("TContainer");
            container.style.width = this.width+"px";
            container.style.height = (this.height * 0.9)+"px";
            const light =new THREE.DirectionalLight( 0xffffff, 1 );
            light.position.set( 0, 0, 10 );
            this.renderer = new THREE.WebGLRenderer(
              {
                antialias: true, 
                alpha: true 
              }
            );
            this.renderer.setClearColor(`rgb(${this.background})`, this.alpha);
            const h = container.clientHeight*0.9
            this.renderer.setSize(container.clientWidth, h);
            container.appendChild(this.renderer.domElement);
            this.scene = new THREE.Scene();


            this.camera = new THREE.PerspectiveCamera(
              30,container.clientWidth / h,0.1,10
            );
            this.camera.position.z = 0.3;
            this.scene.add(light)
        },
        createMaterials(){
            this.transparentMaterial = new THREE.MeshBasicMaterial( {transparent :true,opacity:0} );
            this.centerBallMaterial = new THREE.MeshBasicMaterial( {color: `rgb(${this.colorCenterBall})`} );
            this.ballMaterial = new THREE.MeshBasicMaterial( {color: `rgb(${this.colorBaseBall})`} );
            this.testMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00,wireframe: true} );
        },
        createBall(){
            const radius = 0.07
            const sizeParticule = 0.007
            const particleCount = this.cantBalls
            const phiIncrement = Math.PI * (3 - Math.sqrt(5)); // Golden angle in radians
            for(let i = 0; i < particleCount; i++){
                const theta = phiIncrement * i; // Angle
                const y = 1 - (i / (particleCount - 1)) * 2; // y goes from 1 to -1
                const radiusAtY = Math.sqrt(1 - y * y); // Radius at y
                const x = radiusAtY * Math.cos(theta) * radius;
                const z = radiusAtY * Math.sin(theta) * radius;
                const sizePart = radiusAtY* sizeParticule
                const geometry = new THREE.CircleGeometry( sizePart , 6);
                const plane = new THREE.Mesh( geometry, this.ballMaterial );
                this.planes.push(plane)
                plane.position.set(x,y*radius,z)
                plane.lookAt(this.vectorSp)
                this.meshV.add( plane );
            }
        },
        createBackground(){
          const loader = new THREE.TextureLoader()
          loader.crossOrigin = null
          loader.load(
                this.background1,(texture)=>{
                    this.material7 = new THREE.MeshLambertMaterial(
                        {
                            map:texture,
                            color:`rgb(${this.colorBaseBall})`,
                            transparent :true,
                            opacity:0.7
                            
                        }

                    )
                    this.back1 = new THREE.Mesh(
                        this.particuleGeo,
                        this.material7
                    )
                    this.back1.position.set(0,0,-1)
                    this.back1.scale.set(0.8,0.8)
                    this.scene.add(this.back1)
                }
            )
          loader.load(
              this.background3,(texture)=>{
                  this.material7 = new THREE.MeshLambertMaterial(
                      {
                          map:texture,
                          color:`rgb(${this.colorBaseBall})`,
                          transparent :true,
                          opacity:1
                      }

                  )
                  this.back3 = new THREE.Mesh(
                      this.particuleGeo,
                      this.material7
                  )
                  this.back3.position.set(0,0,-1)
                  //const randomSize = Math.random()*7
                  this.back3.scale.set(0.4,0.4)
                  this.scene.add(this.back3)
              }
          )
        },
        testing(){
          //const sphereGeo2= new THREE.SphereGeometry( 1,1,1 );
          //const f = new THREE.Mesh(sphereGeo2, this.testMaterial);
          //this.scene.add(f)

        },
       init(){
          this.createScene()
          this.createMaterials()
          //this.vectorSp = new THREE.Vector3();
          //const sphereGeo= new THREE.PlaneGeometry( 1,1 );
          //this.meshV = new THREE.Mesh(sphereGeo, this.transparentMaterial);
          //this.particuleGeo= new THREE.PlaneGeometry( 1, 1);
          //this.createBall()
          //this.scene.add(this.meshV)
          //this.createBackground()
          //this.testing()
          const sphereGeor= new THREE.SphereGeometry( 20, 20, 20 );
          this.f = new THREE.Mesh(sphereGeor, this.testMaterial);
          this.f.position.set(0,0,-5)
          this.f.scale.set(0.04,0.04,0.04)
          this.scene.add(this.f)
          this.ani()
       },
       ani(){
        if (this.$parent.lastPosition != this.$parent.position){
            //this.meshV.rotation.x += 0.01
            this.f.rotation.x = THREE.Math.degToRad(this.$parent.position) * 3
            let container = document.getElementById("containerSection")
            let degres = this.$parent.position * 3
            container.style.transform= `rotateX(${degres}deg)`
            this.$parent.lastPosition = this.$parent.position
        }
        setTimeout(this.ani,40)
        this.renderer.render(this.scene, this.camera);
        //this.animationParticules()
        //this.animationBackground()
       },
  },
  mounted() {
    this.init();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
