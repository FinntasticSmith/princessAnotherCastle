class Player {
    constructor(name) {
      this.name = name;
      this.totalCoins = 0;
      this.status = "Powered Up";
      this.hasStar = false;
    }
    
    setName(namePicked) {
      this.name = namePicked;
    }
    
    gotHit() {
      switch (this.status) {
        case "Powered Up":
          this.status = "Big";
          break;
        case "Big":
          this.status = "Small";
          break;
        case "Small":
          this.status = "Dead";
          break;
      }
    }
    
    gotPowerup() {
      switch (this.status) {
        case "Small":
          this.status = "Big";
          break;
        case "Big":
          this.status = "Powered Up";
          break;
        case "Powered Up":
          this.hasStar = true;
          break;
      }
    }
    
    addCoin() {
      this.totalCoins += 1;
    }
    
    print() {
      console.log(`Name: ${this.name}`);
      console.log(`Status: ${this.status}`);
      console.log(`Total Coins: ${this.totalCoins}`);
      console.log(`Star Active: ${this.hasStar}`);
    }
  }
  
  const player = new Player("Mario");
  
  const randomRange = () => {
    return Math.floor(Math.random() * 3);
  };
  
  const intervalId = setInterval(() => {
    const randomNum = randomRange();
    
    switch (randomNum) {
      case 0:
        player.gotHit();
        break;
      case 1:
        player.gotPowerup();
        break;
      case 2:
        player.addCoin();
        break;
    }
    
    player.print();
    
    if (player.status === "Dead") {
      clearInterval(intervalId);
    }
  }, 1000);
  