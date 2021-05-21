const addBlocksButton = document.querySelector('#add-blocks-button');
const blockContainer = document.querySelector('.block-container');

addBlocksButton.addEventListener('click', () => {
    const numBlocks = Math.ceil(Math.random() * 5);
    for (let i = 0; i < numBlocks; i++) {
        const numberInBox = Math.ceil(Math.random() * 1000);
        let div = document.createElement('div');
        div.textContent = numberInBox;
        blockContainer.appendChild(div);
        div.classList.toggle('box');
    }
})

blockContainer.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('box-container') === false && evt.target.textContent == 777) {
        evt.target.classList.toggle('jackpot');
        evt.target.textContent = '$$$$$$$$$$$$';
    } else if (evt.target.classList.contains('box-container') === false) {
        evt.target.classList.toggle('selected');
        
    }
})