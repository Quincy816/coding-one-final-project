color[] cols = {#0ff2f0, #08a8a0, #046b0b, #023606};

Agent[]  agents;

void setup() {
  
  size (700,600);
  background(0);
  
  
  agents = new Agent[5000] ;
  
  
  noiseSeed(0);
  randomSeed(0);
  
  for (int i = 0; i < agents.length; i++) {
    agents [i] = new Agent(); 
    
    
  }
    
}



void draw(){
  
  
    for(Agent agent : agents) {
    
  
  agent.display(); 
  agent.update();
  
  
}
   if (mousePressed) {
        for (int i = 0; i < agents.length; i++){
          agents [i] = new Agent();
          background (255); 
       } 
   }
       
       if (keyPressed) {
          for (int i = 0; i < agents.length; i++) {
    agents [i] = new Agent(); 
    background (0);

   }
       }
 
}