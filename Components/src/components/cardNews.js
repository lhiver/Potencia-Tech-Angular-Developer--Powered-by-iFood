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
        autor.textContent = "By " + (this.getAttribute("autor") || " anonymous");

        const linktitle = document.createElement("a");
        linktitle.textContent = this.getAttribute("title");
        linktitle.href = this.getAttribute("link-url");

        const newscontent = document.createElement("p");
        newscontent.textContent = this.getAttribute("content");

        cardleft.appendChild(autor);
        cardleft.appendChild(linktitle);
        cardleft.appendChild(newscontent);

        const cardright = document.createElement("div");
        cardright.setAttribute("class","card-right");

        const newsimage = document.createElement("img");
        newsimage.src = this.getAttribute("photo") || "assets/default-image.jpg";
        newsimage.alt = "foto da noticia"
        cardright.appendChild(newsimage);


        componentRoot.appendChild(cardleft);
        componentRoot.appendChild(cardright);

        return componentRoot;
    }

    styles(){
        const style = document.createElement("style");

        style.textContent = `
        .card{
            width: 80%;
            -webkit-box-shadow: 20px 16px 38px -5px rgba(4,13,13,1);
            -moz-box-shadow: 20px 16px 38px -5px rgba(4,13,13,1);
            box-shadow: 20px 16px 38px -5px rgba(4,13,13,1);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        .card-left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        .card-left span{
            font-weight: 400;
        }
        .card-left a{
            text-decoration: none;
            font-weight: bold;
        }
        .card-left h1{
            margin-top: 15px;
            font-size: 25px;
        }
        .card-left p{
            color: gray;
        }
        .card-right img{
            width: 10em;
        }

        `

        return style;
    }
}

customElements.define("card-news", Cardnews);