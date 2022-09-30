const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const nextButton = document.getElementById('next-button');
const quoteContainer = document.getElementById('quote-container');

function loadQuote()
{
	const quote = quotes[Math.floor(Math.random() * quotes.length)];

	if(quote.text.length > 100) quoteText.classList.add('long-quote');
	else quoteText.classList.remove('long-quote');

	quoteText.textContent = `"${quote.text}"`;
	authorText.textContent = `-${quote.author}`;
}

nextButton.addEventListener('click', loadQuote);

loadQuote();
