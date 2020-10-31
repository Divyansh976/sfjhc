class Block  {
    constructor(x,y,width,height)  {
        var options={
            isStatic:false
        }
        this.Visibility = 255;
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x,y,width,height,options)
        

        World.add(world,this.body)

    }
    display()  {
        if(this.body.speed > 3)  {
            World.remove(world,this.body)

            push()
            this.Visibility = this.Visibility-5;
            tint(255,this.Visibility)
            rectMode(CENTER)
            fill(171,247,247)
            rect(this.body.position.x,this.body.position.y,this.width,this.height)
            pop()
        }
            
    }  
        
    
}