class Cardnews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardleft = document.createElement("div");
        cardleft.setAttribute("class", "card-left");

        const autor = document.createElement("span");
        autor.textContent = "By " + this.getAttribute("autor");

        const linktitle = document.createElement("a");
        const newscontent = document.createElement("p");

        cardleft.appendChild(autor);
        cardleft.appendChild(linktitle);
        cardleft.appendChild(newscontent);

        const cardright = document.createElement("div");
        cardright.setAttribute("class","card-right");
        const newsimage = document.createElement("img");
        cardright.appendChild(newsimage);


        componentRoot.appendChild(cardleft);
        componentRoot.appendChild(cardright);
    }

    styles(){}
}

customElements.define("card-news", Cardnews);