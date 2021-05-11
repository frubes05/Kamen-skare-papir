let rezultatKorisnika=document.querySelector('#korisnikRezultat');
let rezultatRacunalo=document.querySelector('#racunaloRezultat');
let rezultatDiv=document.querySelector('.rezultat');
let opcijeDiv=document.querySelector('.opcije');
let vrijednostKorisnik=0;
let vrijednostRacunalo=0;


function randomLetter(){
  let array=["r","p","s"];
  let broj=Math.floor(Math.random()*array.length);
  let computer=array[broj];
  return computer;
}

randomLetter();

document.body.addEventListener("click",stisniNaOpciju);

function stisniNaOpciju(e) {
  if(e.target.value=="r" || e.target.value=="p" || e.target.value=="s"){
    let value=e.target.value;
    provjeri(value);
  }
  e.preventDefault();
}


function provjeri(korisnik){
  let racunalo=randomLetter();
  let zajedno=korisnik.concat(racunalo);

  switch (zajedno) {
    case 'rs':
    case 'pr':
    case 'sp':
      vrijednostKorisnik++;
      rezultatKorisnika.innerHTML=`${vrijednostKorisnik}`;
      if(vrijednostKorisnik==10){
        rezultatDiv.innerHTML=`<p style="font-size:1.5rem;">Korisnik je pobijedio.</p>`;
        opcijeDiv.innerHTML=`<button class="ponovo">Igraj ponovno</button>`
        //window.location.reload();
      }
      break;
    case 'sr':
    case 'rp':
    case 'ps':
      vrijednostRacunalo++;
      rezultatRacunalo.innerHTML=`${vrijednostRacunalo}`;
      if(vrijednostRacunalo==10){
        rezultatDiv.innerHTML=`<p style="font-size:1.5rem; font-weight:bold;">Racunalo je pobijedilo.</p>`;
        opcijeDiv.innerHTML=`<button class="ponovo">Igraj ponovno</button>`
        //window.location.reload();
      }
      break;
    case 'rr':
    case 'pp':
    case 'ss':

      break;
  }
}

document.body.addEventListener("click",igrajPonovo);


function igrajPonovo(e) {
  if(e.target.classList.contains('ponovo')){
    window.location.reload();
  }
}
