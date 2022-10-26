class Form {
  constructor() {
    this.input=createInput("")
    this.playButton=createButton("Click to Start")
    this.title=createImg("assets/title.png")
    this.greeting=createElement("h3")

  }
  setElementPositon(){
    this.title.position(120,80)
    this.input.position(width/2-100,height/2-90)
    this.playButton.position(width/2-100,height/2-20)
    this.greeting.position(width/2-100,height/2-20)
  }
  display() {
    this.setElementPositon()
    this.HandleMousePressed()
  }
  HandleMousePressed(){
    this.playButton.mousePressed(()=>{
      this.input.hide()
      this.playButton.hide()
      var message=`Hello ${this.input.value()} Waiting for other players`
      this.greeting.html(message)
      
    })
  }
}
