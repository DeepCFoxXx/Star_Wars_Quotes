var app = function() {
  addQuote("Obi Wan Kenobi", "Hello There");
  addQuote("Darth Sidious", "Do it");
};

var addQuote = function(author, text) {
  var quoteArticle = createQuoteArticle();
  var blockquote = createBlockQuote(text);
  var cite = createCite(author);
  var quotes = document.querySelector('#quotes');
  appendElements(quotes, quoteArticle, blockquote, cite);
};

var createQuoteArticle = function() {
  var quoteArticle = document.createElement('article');
  quoteArticle.classList.add('quote');
  return quoteArticle;
};

var createBlockQuote = function(text) {
  var blockquote = document.createElement('blockquote');
  blockquote.innerText = text + " ";
  return blockquote;
};

window.onload = app;
