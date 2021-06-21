class Card {

    static count = 0;
    
    constructor(_url, _title) {

        this.card = document.createElement("div");
        let img = document.createElement("img");
        let p = document.createElement("p");

        this.card.className = "card";
        img.src = _url;
        p.innerText = _title;

        this.card.appendChild(img);
        this.card.appendChild(p);


        img.style.cssText = " border-radius: 5px 5px 0 0; max-width: 100%;  vertical-align: middle;";
        this.card.style.cssText = "overflow: hidden; background-color: hsl(0, 0%, 100%); box-shadow: 0 4px 8px 0 rgba(100, 100, 100, 0.2);  text-align: center; border-radius: 5px;    margin-top: 40px; margin-bottom: 20px;"
       

        this.card.addEventListener('click', () => {
             
          
            
            const curColor = this.card.style.backgroundColor;
            if (curColor === 'rgb(255, 255, 255)') {
                this.card.style.backgroundColor = "lightSalmon";
                Card.count++;
                document.getElementById("output").textContent = "card colored count : " + Card.count;
            } else {
                this.card.style.backgroundColor = "hsl(0, 0%, 100%)";
                Card.count--;
                document.getElementById("output").textContent = "card colored count : " + Card.count;

            }
            return this.card;
        });

        
    }

    getCard(){
        return this.card;
    };
    
    
}   

class Container {  


    constructor() {
        let c ;
        let cards = document.createElement("div");
      
        let span = document.createElement("span");
        span.id = "output";
        span.style.cssText = "font-weight : bold; font-size : 40px; text-align: center;";
        document.body.appendChild(span);
        console.log(span);
       
        document.body.appendChild(cards);

        
        cards.style.display = "grid";
        cards.style.gridGap = "15px";
        cards.style.gridTemplateColumns = "repeat(auto-fill,minmax(170px,1fr)";
        cards.style.margin = '0 auto';
        cards.style.width = '80%';

        fetch('https://jsonplaceholder.typicode.com/photos').then((response)=>response.json())
        .then((result) => {

          

            for(let i=0; i< 19; i++) {
                let obj = result[i];
                let url = obj.url;
                let title = obj.title;
                c = new Card(url, title);
                cards.appendChild(c.getCard()); 
            }
        });
    }

}


let show = new Container();

