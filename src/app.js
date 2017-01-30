
AFRAME.registerComponent("hang",{
  init(){
    console.log('init called')
    let el = this.el;
    let entity = this;
    el.addEventListener('body-loaded', ()=> {

      let body = this.el.body;
      let anchor = new CANNON.Body({ mass:0 })
      let position = this.el.object3D.position
      let worldX = el.object3D.matrixWorld.elements[12]+0
      let worldY = el.object3D.matrixWorld.elements[13]+0
      let worldZ = el.object3D.matrixWorld.elements[14]+0

      anchor.position.set(worldX, worldY+3, worldZ)
      let constraint = new CANNON.PointToPointConstraint( body, new CANNON.Vec3(-.25,1,0), anchor, new CANNON.Vec3(0,0,0))
      body.world.addConstraint(constraint)
    })
  }
})


AFRAME.registerComponent('cursor-listener',{
  init(){
    this.el.addEventListener('click',(evt)=>{
      let pnt = evt.detail.intersection.point
      //let wrld = this.el.sceneEl.camera.getWorldDirection()
      let dirVector = new CANNON.Vec3(pnt.x*.3,pnt.y*.3,pnt.z*.3)
      //let dirVector = new CANNON.Vec3(wrld.x*5,wrld.y*5,wrld.z*5)
      this.el.body.applyLocalImpulse(dirVector, new CANNON.Vec3(pnt.x,pnt.y,pnt.z))

    })
  }
})
