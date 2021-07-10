document.addEventListener('DOMContentLoaded', () => {
    //card of arrays options 
    const cardArray = [
        {
            name: 'Elephant',
            img: 'Images/Elephant.jpg'
        },
        {
            name: 'Elephant',
            img: 'Images/Elephant.jpg'
        },
        {
            name: 'Kangraoo',
            img: 'Images/Kangraoo.jpg'
        },
        {
            name: 'Kangraoo',
            img: 'Images/Kangraoo.jpg'
        },
        {
            name: 'Lion',
            img: 'Images/Lion.jpg'
        },
        {
            name: 'Lion',
            img: 'Images/Lion.jpg'
        },
        {
            name: 'Rhino',
            img: 'Images/Rhino.jpg'
        },
        {
            name: 'Rhino',
            img: 'Images/Rhino.jpg'
        },
        {
            name: 'Tiger',
            img: 'Images/Tiger.webp'
        },
        {
            name: 'Tiger',
            img: 'Images/Tiger.webp'
        },
        {
            name: 'Toucan',
            img: 'Images/Toucan.jpg'
        },
        {
            name: 'Toucan',
            img: 'Images/Toucan.jpg'
        }
    ]

    const grid = document.querySelector('.grid'); 
    const resultsDisplay =document.querySelector('#Results'); 
    let cardsPicked = [];
    let cardsPickedId = []; 
    let cardsWons = []; 

     //Game board: 
    function createBoard() {
        for(let i = 0; i < cardArray.length; i++) {
         let card = document.createElement('img'); 
         card.setAttribute('src', 'Images/Random.png');
         card.setAttribute('data-id', i); 
         card.addEventListener('click', flipCard)
         grid.appendChild(card);
        }
    }

    createBoard(); 

    //Randomize the images:
    cardArray.sort(() => 0.5 - Math.random()); 

    //Checking for matches:
    function checkForMatch() {
        let cards =document.querySelectorAll('img');
        let optionOneId = cardsPickedId[0];
        let optionTwoId = cardsPickedId[1];
        if (cardsPicked[0] === cardsPicked[1]) {
            alert('You Have a match!');
            cards[optionOneId].setAttribute('src', 'Images/White Blank.png');
            cards[optionTwoId].setAttribute('src', 'Images/White Blank.png');
            cardsWons.push(cardsPicked);
        } else {
            cards[optionOneId].setAttribute('src', 'Images/Random.png');
            cards[optionTwoId].setAttribute('src', 'Images/Random.png');
            alert('Sorry, try again'); 
        }
        cardsPicked = []; 
        cardsPickedId = []; 
        resultsDisplay.textContent = cardsWons.length;
        if (cardsWons.length === cardArray.length / 2) {
            resultsDisplay.textContent = " Congraulations! You found them all!";
        }
    }

    //Fliping cards:
    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsPicked.push(cardArray[cardId].name); 
        cardsPickedId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsPicked.length === 2 ) {
            setTimeout(checkForMatch, 500); 
        }
    }
})