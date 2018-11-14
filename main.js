var pokemon1 = 708;
var pokemon3 = 330;
var pokemon2 = 719;

class Pokemons {
  constructor(name,hp, attack, defense,id, images,type, abilities) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.id = id;
    this.images = images;
    this.type = type;
    this.abilities = abilities;
    trainer.pokemons.push(this);

  }
}
class Info {
  constructor(text){
    this.text = text;
  }
}

class Trainer {
  constructor(name) {
    this.name = name;
    this.pokemons = [];
  }

  all(){
    return this.pokemons;
  }

  get(name) {
    for (let i = 0; i < this.pokemons.length; i++) {
        let pokemonName = this.pokemons[i].name;
        if (pokemonName === name) {
            return this.pokemons[i];
        }
    }
    return false;
  }
}

function getPokemon(pokemon) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);
      // console.log(data);

      let name = data["name"];
      let hp = data["stats"][5]["base_stat"];
      let attack = data["stats"][4]["base_stat"];
      let defense = data["stats"][3]["base_stat"];
      let id = data["id"];
    let images = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + pokemon +".png";
    // id =parseInt();
    for(typ in data["types"]){
      var types = (data["types"][typ]["type"]["name"]);
    }
    var abilities =  data["abilities"][0]["ability"]["name"];
    // console.log(abilities);
    let pokemons = new Pokemons(name,hp,attack,defense,id,images,types,abilities);
    console.log(pokemons);
    displayStats(pokemons)
}
};
  xhttp.open("GET", "https://fizal.me/pokeapi/api/" +pokemon+ ".json", true);
  xhttp.send();
}

// *******************************************************************************************************
function pokeInf (pokemon) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);
      console.log(data);
      for (i in data["flavor_text_entries"]) {
                // console.log(data[i]);
                if (data['flavor_text_entries'][(i)]['language']['name'] == 'en'){
                  var text= data['flavor_text_entries'][(i)]['flavor_text'];
                }
              }

      let description = new Info(text);
      displayText(description)
}
};
  xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon-species/" +pokemon + "/", true);
  xhttp.send();
}

var trainer = new Trainer ("Bonny", pokemon1, pokemon2, pokemon3);

let poke1 = document.querySelector("#phantump");
let poke2 = document.querySelector("#flygon");
let poke3 = document.querySelector("#diancie");


let images = document.querySelector(".pokeImage");
let name = document.querySelector(".name");
let id = document.querySelector(".id");
let hp = document.querySelector(".hp");
let attack = document.querySelector(".attack");
let defense = document.querySelector(".defense");
let type = document.querySelector(".type");
let abilities = document.querySelector(".abilities");
let text = document.querySelector(".text");
let invisible = document.querySelector(".invisible")
let visible = document.querySelector(".visible")


function displayStats(pokemon) {
  images.src = pokemon.images;
  name.innerText = pokemon.name.toUpperCase();
  id.innerText = pokemon.id;
  hp.innerText = pokemon.hp;
  attack.innerText = pokemon.attack;
  defense.innerText = pokemon.defense;
  type.innerText = pokemon.type;
  abilities.innerText = pokemon.abilities;
  invisible.classList.remove("invisible")
  visible.classList.remove("visible")

}
function displayText(pokemon){
  text.innerHTML = pokemon.text;
  invisible.classList.remove("invisible")
}

poke1.addEventListener("mouseover", displayPhantump);
poke1.addEventListener("mouseout", removePhantump);
poke3.addEventListener("mouseover", displayFlygon);
poke3.addEventListener("mouseout", removeFlygon);
poke2.addEventListener("mouseover", displayDiancie);
poke2.addEventListener("mouseout", removeDiancie);

function displayPhantump() {
  getPokemon(708);
  pokeInf(708);
}

function removePhantump(){
  invisible.classList.add("invisible");
  visible.classList.add("visible")
}
function displayFlygon() {
  getPokemon(330);
  pokeInf(330);
}
function removeFlygon(){
  invisible.classList.add("invisible");
  visible.classList.add("visible")
}

function displayDiancie() {
  getPokemon(719);
  pokeInf(719);
}
function removeDiancie(){
  invisible.classList.add("invisible");
  visible.classList.add("visible")
}

// ****************************************************************
// RANDOM POKEMONS
function randomPoke(pokemon) {
  pokemon = Math.floor(Math.random() * 802);
  console.log(pokemon);
  getPokemon(pokemon);
  pokeInf(pokemon);
}
