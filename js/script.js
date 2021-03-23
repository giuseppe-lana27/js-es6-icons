// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
//
// Milestone 2
// Coloriamo le icone per tipo
//
// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

const icons = [
  {
    name: 'apple-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'ice-cream',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'fish',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'lemon',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'hamburger',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'pizza-slice',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'beer',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-whiskey',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'wine-bottle',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'cocktail',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'coffee',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-martini',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'dragon',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'kiwi-bird',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'frog',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'hippo',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'otter',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'horse',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
];
// Milestone 2. coloro le icone per tipo
const colors = ['blue', 'red', 'green'];
const categories = [];
// metto le icone in array per catogorie
icons.forEach((icon) => {
  if (categories.includes(icon.category) == false){
    categories.push(icon.category);
  }
});
// mappo l'array per inserire i colori in base alla categoria
const coloredIcons = icons.map((icon) =>{
  const catIndex = categories.indexOf(icon.category);
  const itemColor = colors[catIndex];
  icon.color = itemColor;
  return icon;
});
// Milestone 1. stampo a schermo le icone con i colori inseriti in Milestone 2.
printingIcons(coloredIcons);
// Milestone 3. usare la select per filtrare le icone
const selection = $("#type");
categories.forEach((item) => {
  const htmlOpt = `
  <option value="${item}">${item}</option>
  `;
  $(selection).append(htmlOpt);
});
selection.change(function() {
  const selectedOpt = $(this).val();
  // filtro le icone in base alla categoria
  let filteringIcons = coloredIcons.filter((icon) =>{
    return icon.category == selectedOpt;
  });
  // se viene selezionata la categoria all la pagina non resterà vuota
  if (filteringIcons.length == 0){
    filteringIcons = coloredIcons;
  }
  // svuoto la pagina e mostro in pagina le icone in base alla categoria scelta
  printingIcons(filteringIcons);
});

// funzione per stampare le icone a schermo
function printingIcons(icons){
  $(".icons").html(" ");
  icons.forEach((icon) => {
    const {name, prefix, family, color} = icon;
    const htmlIcons = `
    <div>
      <i class="${family} ${prefix}${name}" style="color:${color}"></i>
      <div class="title">${name}</div>
    </div> `;
    $(".icons").append(htmlIcons);
  });
}
