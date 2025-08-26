const quotes = [
    {
        quote: "Bez práce nejsou koláče.",
        translation: "노력 없이는 보상도 없다.",
    },
    {
        quote: "Dvakrát měř, jednou řež.",
        translation: "두 번 잰 후에 한 번 자르라.",
    },
    {
        quote: "Co se lehce nabude, snadno se pozbude.",
        translation: "얻기 쉬운 것은 잃기도 쉽다.",
    },
    {
        quote: "Mluviti stříbro, mlčeti zlato.",
        translation: "말은 은이고, 침묵은 금이다.",
    },
    {
        quote: "Bůh dá den, Bůh dá pokrm.",
        translation: "하루하루가 식량을 준다.",
    },
    {
        quote: "Kdo jinému jámu kopá, sám do ní padá.",
        translation: "다른 사람을 해치기 위해 구덩이를 파는 자는, 자신이 그 안에 빠진다.",
    },
    {
        quote: "Jak si kdo ustele, tak si lehne.",
        translation: "내가 만든 침대에 내가 눕는다.",
    },
    {
        quote: "Darovanému koni na zuby nehleď.",
        translation: "선물로 받은 말의 이빨을 들여다보지 마라.",
    },
    {
        quote: "Sytý hladovému nevěří.",
        translation: "배부른 자는 배고픈 자를 믿지 않는다.",
    },
    {
        quote: "Kdo seje vítr, sklízí bouři.",
        translation: "바람을 뿌리는 자는 폭풍을 거둔다.",
    },
];

const quote = document.querySelector("#quote span:first-child");
const translation = document.querySelector("#quote span:last-child");

function selectRandomQuote() {
    const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quote.innerText = selectedQuote.quote;
    translation.innerText = selectedQuote.translation;
}

selectRandomQuote()

setInterval(selectRandomQuote, 10000);
