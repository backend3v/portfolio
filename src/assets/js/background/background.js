import * as THREE from 'three';

class Render {
    background1="images/01.png"
    background2="images/02.png"
    background='11,18,24'//'26,33,39'
    alpha=0.5
    scene
    camera
    renderer
    light
    targetObserver
    //Ball
    colorBaseBall='31,38,44'//'28,35,41'
    colorCenterBall='31,38,44'
    cantBalls=100
    planes=[]
    ball
    radius = 0.07
    sizeParticule = 0.006
    sidesParticule = 6
    //Animation Ball
    count=0
    nodesActives =[]
    delayNodes = 25
    growDelay = 0.07
    nodeScale = 0.5
    //Background
    colorBackground1='48,45,65'
    colorBackground2='35,48,60'
    cube
    width
    height
    position=0
    lastPosition=0
    delayAnimation=40

    constructor(w,h,delay) {
        this.width = w;
        this.height = h;
        this.delayAnimation = delay
        this.initialize();
    }
    initialize() {
        this.createScene();
        this.createMaterials();
        this.createMainActors();
        this.createBall()
        this.particuleGeo= new THREE.PlaneGeometry( 1, 1);
        this.createBackground()

        //this.testing();
        this.animate();
    }
    createMaterials(){
        this.transparentMaterial = new THREE.MeshBasicMaterial( {transparent :true,opacity:0} );
        this.centerBallMaterial = new THREE.MeshBasicMaterial( {color: `rgb(${this.colorCenterBall})`} );
        this.ballMaterial = new THREE.MeshBasicMaterial( {color: `rgb(${this.colorBaseBall})`} );
        this.testMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00,wireframe: true} );
    }

    createBall(){
        const phiIncrement = Math.PI * (3 - Math.sqrt(5)); // Golden angle in radians
        for(let i = 0; i < this.cantBalls; i++){
            const theta = phiIncrement * i; // Angle
            const y = 1 - (i / (this.cantBalls - 1)) * 2; // y goes from 1 to -1
            const radiusAtY = Math.sqrt(1 - y * y);
            const x = radiusAtY * Math.cos(theta) * this.radius;
            const z = radiusAtY * Math.sin(theta) * this.radius;
            const sizePart = radiusAtY* this.sizeParticule
            const circle = new THREE.CircleGeometry( sizePart , this.sidesParticule);
            const plane = new THREE.Mesh(circle, this.ballMaterial );
            this.planes.push(plane)
            plane.position.set(x,y*this.radius,z)
            plane.lookAt(this.targetObserver)
            this.ball.add( plane );
        }
    }
    animationBall(){
        this.count = this.count + 1 < (this.cantBalls) ? this.count + 1 : 1
        const node = this.planes[this.count-1]
        let nodeScale = this.nodeScale
        for(let i of this.nodesActives){
            const nodeClean = this.planes[i - 1]
            nodeClean.scale.set(0,0)
            nodeClean.material =  this.ballMaterial
        }
        this.nodesActives= []
        for(let i = this.delayNodes; i > 0; i--){
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
            nodeScale += this.growDelay
        }
        nodeScale += this.growDelay*2
        node.scale.set(nodeScale,nodeScale)
        node.material = this.centerBallMaterial
    }

    getImageMaterial(texture,color,opacity){
        const tempMaterial= new THREE.MeshLambertMaterial(
            {
                map:texture,
                color:`rgb(${color})`,
                transparent :true,
                opacity:opacity
            }
        )
        return tempMaterial
    }
    createBackground(){
        const loader = new THREE.TextureLoader()
        loader.crossOrigin = null
        loader.load(
              this.background1,(texture)=>{
                  this.materialBackground1 = this.getImageMaterial(texture,this.colorBackground1,0.7)
                  this.back1 = new THREE.Mesh(
                      this.particuleGeo,
                      this.materialBackground1
                  )
                  this.back1.position.set(0,0,-1)
                  this.back1.scale.set(0.8,0.8)
                  this.scene.add(this.back1)
              }
          )
        loader.load(
            this.background2,(texture)=>{
                this.materialBackground2 = this.getImageMaterial(texture,this.colorBackground2,0.7)
                this.back3 = new THREE.Mesh(
                    this.particuleGeo,
                    this.materialBackground2
                )
                this.back3.position.set(0,0,-1)
                this.back3.scale.set(0.4,0.4)
                this.scene.add(this.back3)
            }
        )
      }
    animationBackground(){
        if(this.back1){
          this.back1.rotation.z += 0.004
          this.back3.rotation.z -= 0.02
        }
        
        
    }
    testing() {
        const sphereGeor= new THREE.SphereGeometry( 20, 20, 20 );
        this.f = new THREE.Mesh(sphereGeor, this.testMaterial);
        this.f.position.set(0,0,-5)
        this.f.scale.set(0.04,0.04,0.04)
        this.scene.add(this.f)
    }
    createScene() {
        const container = document.getElementById("TContainer");
        const h = this.height * 0.9;
        const w = this.width;
        container.style.width = w + "px";
        container.style.height = h + "px";
        this.scene = new THREE.Scene();
        this.light =new THREE.DirectionalLight( 0xffffff, 1 );
        this.light.position.set( 0, 0, 10 );
        this.renderer = new THREE.WebGLRenderer(
            {
            antialias: true,
            alpha: true
            }
        );
        this.renderer.setClearColor(`rgb(${this.background})`, this.alpha);
        this.renderer.setSize(w, h);
        container.appendChild(this.renderer.domElement);
        this.scene = new THREE.Scene();


        this.camera = new THREE.PerspectiveCamera(
            30,w / h,0.1,10
        );
        this.camera.position.z = 0.3;
        this.scene.add(this.light)
    }
    createMainActors(){
        this.targetObserver = new THREE.Vector3();
        const planeGeo= new THREE.PlaneGeometry( 1,1 );
        this.ball = new THREE.Mesh(planeGeo, this.transparentMaterial);
        this.scene.add(this.ball);
    }
    movesc(){
        //this.f.rotation.x =THREE.Math.degToRad(this.position) * 3
        this.ball.rotation.x =THREE.Math.degToRad(this.position)
        const container = document.getElementById("containerSection")
        const degres = this.position
        container.style.transform= `rotateX(${degres}deg)`
    }
    animate() {
        setTimeout(() => this.animate(), this.delayAnimation);
        if(this.position != this.lastPosition){
            this.movesc()
            this.lastPosition = this.position
        }
        this.animationBall()
        this.animationBackground()
        this.renderer.render(this.scene, this.camera);

    }
}

// Export the Render constructor
export function initRender(width, height,delay) {
    return new Render(width, height,delay);
}