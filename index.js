function juftSonlarniChopEtish(son = 0) {
    if (son > 100) return; 
    if (son % 2 === 0) console.log(son); 
    juftSonlarniChopEtish(son + 1); 
}

juftSonlarniChopEtish();
