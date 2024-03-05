let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');

let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

let count = 0;

//iteramos el arreglo count, y contamos el num de palabras
storyWords.forEach(function(word) {
    count++;
});
console.log(count);

//si es una palabra necesaria, la mantendra en el arreglo
//si es no necesaria, no la guardara en el arreglo 
storyWords=storyWords.filter(function(word){
    return word!==unnecessaryWord;
});

//si esta mal escrita la corregira con la palabra puesta en el retunr
//si no, simplemente la mantendra igual
storyWords=storyWords.map(function(word){
    if(word===misspelledWord){
        return "beautiful";
    }
    return word;
});

//encuentra el indice de badWord y te lo regresa
let badWordIndex=storyWords.findIndex(function(word){
    return word===badWord;
});
console.log(badWordIndex);

//y lo cambiuara
if (badWordIndex !== -1) { //-1 porque es lo que regresara si es false
    storyWords[badWordIndex] = 'really';
}

// guarda la palabra si es menor de tamaño o igual de 10 letras
let lengthCheck=storyWords.every(function(word){
  return word.length <= 10;
});

console.log(lengthCheck);

//usando la misma logica del ejercicio anteanterior,
let longWordIndex = storyWords.findIndex(function(word) {
  return word.length > 10;
});
//sustituimos si lo encuentra
if (longWordIndex !== -1) {
  storyWords[longWordIndex] = 'stunning';
}

//unimos todo con espacios y finalizamos
let editedStory = storyWords.join(' ');
console.log(editedStory);