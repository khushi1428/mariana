class Form{
    constructor(){
         this.name=createInput("Enter Your Name")
         this.title=createElement("h1")
    }
    hide(){
      this.name.hide();
      this.title.hide();
    }
    display(){
       
    
    this.title.html("π΅ππππππ πΏπ πΏππ πΈππππππ πΏπππππ ")
    this.title.position(windowWidth/2-150,20);
    
    
    this.name.position(windowWidth/2-100,200);

   /* var button=createButton("Start");
    button.position(windowWidth/2+50,240)*/

      
      
    
}
}