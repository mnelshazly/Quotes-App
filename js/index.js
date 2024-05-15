var quotes = [
    {author: "Oscar Wilde", quote: `"Be yourself; everyone else is already taken"`},
    {author: "Marcus Tullius Cicero", quote: `"A room without books is like a body without a soul."`},
    {author: "Bernard M. Baruch", quote: `"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."`},
    {author: "Abraham Lincoln", quote: `"In the end, it's not the years in your life that count. It's the life in your years."`},
    {author: "Nelson Mandela", quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall."`},
    {author: "Mae West", quote: `"You only live once, but if you do it right, once is enough."`},
    {author: "Mahatma Gandhi", quote: `"Be the change that you wish to see in the world."`},
    {author: "Robert Frost", quote: `"In three words I can sum up everything I've learned about life: it goes on."`},
    {author: "Oprah Winfrey", quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`},
    {author: "Elbert Hubbard", quote: `"A friend is someone who knows all about you and still loves you."`},
    {author: "James Cameron", quote: `"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."`},
];

var prevQuote = null;

function randomQuote() {

    do {
        var quoteNumber = Math.floor(Math.random() * quotes.length);
    } while (quoteNumber == prevQuote)

    prevQuote = quoteNumber;

    document.getElementById("quoteText").innerHTML = quotes[quoteNumber].quote;
    document.getElementById("quoteAuthor").innerHTML = "<span>" + quotes[quoteNumber].author + "</span>";
}
