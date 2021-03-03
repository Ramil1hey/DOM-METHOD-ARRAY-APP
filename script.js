const add_User = document.querySelector('#add_User');
const double_money = document.querySelector('#add_double');
const add_Show = document.querySelector('#add_Show');
const add_Sort = document.querySelector('#add_Sort');
const add_Calculate = document.querySelector('#add_Calculate');
const person_parent = document.querySelector('#person_parent');
const randomNames = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter", "Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde", "Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler"];
const totalWealth = document.querySelector('#totalWealth');
let wealth = document.querySelector('#wealth');

let arr_numbers = [];

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

let database = [];

add_User.addEventListener('click', (e)=> {
    let randon_num = Math.random();
    randon_num = (randon_num * 183) + 1;
    randon_num = Math.round(randon_num);
    
    database.push({
        name: randomNames[randon_num],
        lastName: randomNames[randon_num-2],
        value: 522435 * randon_num
    })   
    person_parent.innerHTML += `<div class="person__row">
                                    <div class="text3">${randomNames[randon_num]} ${randomNames[randon_num-2]}</div>
                                    <div data-value=${522435 * randon_num} class="text4">$${numberWithCommas(522435 * randon_num)}</div>
                                </div>`;
})

double_money.addEventListener('click', () => {
    document.querySelectorAll('.text4').forEach(i => {
        i.innerHTML = numberWithCommas(Number(i.getAttribute('data-value')) * 2);
        i.dataset.value = Number(i.getAttribute('data-value')) * 2;
    })
})

add_Show.addEventListener('click', () => {
    document.querySelectorAll('.text4').forEach(i => {
        if (Number(i.dataset.value) < 50000000) {
            i.parentNode.querySelector('.text3').style.display = 'none';
            i.style.display = 'none';
        }
    })
})

function calculate() {
    document.querySelectorAll('.text4').forEach(i => {
        arr_numbers.push(Number(i.dataset.value));
    })

    let total = arr_numbers.reduce((total, index) => total + index);
    wealth.innerHTML = numberWithCommas(total);
}

add_Calculate.addEventListener('click', function() {
    totalWealth.style.display = 'block';
    calculate();
})


function sortByRichest() {
    database = database.sort((a, b) => {
        return b.value - a.value;
    })

    person_parent.innerHTML = '';

    for (let i = 0; i < database.length; i++) { 
        person_parent.innerHTML += `<div class="person__row">
                                        <div class="text3">${database[i].name} ${database[i].lastName}</div>
                                        <div class="text4">$${numberWithCommas(database[i].value)}</div>
                                    </div>`
    }
    
}

add_Sort.addEventListener('click', sortByRichest);