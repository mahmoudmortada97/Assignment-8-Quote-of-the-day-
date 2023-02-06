function quoteGenerator() {
  var Quote = [
    {
      quote: `"The best revenge is massive success."`,
      author: `― Frank Sinatra`,
    },
    {
      quote: `“Be yourself; everyone else is already taken.”`,
      author: `― Oscar Wilde`,
    },
    {
      quote: `“A room without books is like a body without a soul.”`,
      author: `― Marcus Tullius Cicero`,
    },
    {
      quote: `“You only live once, but if you do it right, once is enough.”`,
      author: `― Mae West`,
    },
    {
      quote: `“Be the change that you wish to see in the world.”`,
      author: `― Mahatma Gandhi`,
    },
    {
      quote: `“A friend is someone who knows all about you and still loves you.”`,
      author: `― Elbert Hubbard`,
    },
    {
      quote: `“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”`,
      author: `― C.S. Lewis, The Four Loves`,
    },
  ];
  quoterandomnumber = getRandomInt(7);
  document.getElementById("quote-section").innerHTML = ` 
  <p id="quote">${Quote[quoterandomnumber].quote}</p>
  <p id="quote-author">${Quote[quoterandomnumber].author}</p>`;
}

function getRandomInt(max) {
  max = Math.floor(max); // make number rounded to the nearest smaller integer
  return Math.floor(Math.random() * max);
}
