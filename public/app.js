var app = function() {
  addQuote("Obi Wan Kenobi", "Hello There");
  addQuote("Darth Sidious", "Do it");
};

var createQuoteArticle = function() {
  var quoteArticle = document.createElement('article');
  quoteArticle.classList.add('quote');
  return quoteArticle;
};

window.onload = app;
