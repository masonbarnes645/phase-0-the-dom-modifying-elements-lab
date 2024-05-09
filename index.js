const main2 = document.getElementById('main');
document.body.remove(main2);

const newHeader = document.createElement('h1');
newHeader.id = 'victory';

newHeader.textContent = ('Mason is the champion');
document.body.append(newHeader);
