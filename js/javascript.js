//Array
var QuotesandAuthors = [
    {
        'quote': 'Be yourself; everyone else is already taken.',
        'author': 'Oscar Wilde'
    },

    {
        'quote': `In three words I can sum up everything I've learned about life: it goes on.`,
        'author': 'Robert Frost'
    },
    {
        'quote': 'So many books, so little time.',
        'author': 'Frank Zappa'
    },
    {
        'quote': `Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.`,
        'author': 'Bernard M. Baruch'
    },
    {
        'quote': `If you tell the truth, you don't have to remember anything.`,
        'author': 'Mark Twain'
    },
    {
        'quote': 'Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .',
        'author': 'C.S. Lewis, The Four Loves'
    },
    {
        'quote': 'A friend is someone who knows all about you and still loves you.',
        'author': 'Elbert Hubbard'
    },
    {
        'quote': `You know you're in love when you can't fall asleep because reality is finally better than your dreams.`,
        'author': 'Dr. Seuss'
    }

]

function ReadQuote() {
    
    const randomQuote = Math.floor(Math.random() * QuotesandAuthors.length);
    document.getElementById('quote').innerHTML = `" ` + QuotesandAuthors[randomQuote].quote + ` "`;
    document.getElementById('author').innerHTML = `-- ` + QuotesandAuthors[randomQuote].author + ` "`;

}