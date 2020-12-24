function coin_random(){
    var coin = ["Head","Pinkie"];
    var value = coin[Math.floor(Math.random() * coin.length)];
    if(value == "Head"){
        print("eat Bread");
        end();
    }else if(value == "Pinkie"){
        print("eat Fruit");
        end();
    }
}

coin_random();
