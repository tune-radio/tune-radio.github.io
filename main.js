const switchBtn = document.querySelector('#themecheck')
const defaultTheme = window.matchMedia && window.matchMedia("(prefers-color-scheme :dark)");
let currentTheme = localStorage.getItem('theme')
switchBtn.addEventListener('change', switchTheme)

if (defaultTheme.matches) {
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        switchBtn.checked = false;
    } else if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        switchBtn.checked = true;
    }

} else {
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        switchBtn.checked = false;
    } else if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        switchBtn.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark')
        console.log(localStorage.getItem('theme'));
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light')
        console.log(localStorage.getItem('theme'));
    }
}

function menu(){
    document.getElementById("close").style.display = 'block';
    document.getElementById("bar").style.display = 'none';
    document.querySelector(".rightmenu").classList.add("show");
}
function menu2(){
    document.getElementById("bar").style.display = 'block';
    document.getElementById("close").style.display = 'none';
    document.querySelector(".rightmenu").classList.remove("show");
}

const searchInput = document.getElementById('searchInput');
const items = document.querySelectorAll('.rb');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  
  items.forEach(item => {
    const itemClasses = item.classList;
    let matchFound = false;

    itemClasses.forEach(className => {
      if (className.includes(searchTerm)) {
        matchFound = true;
      }
    });

    if (matchFound || searchTerm === '') {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});

const filterCheckboxes = document.querySelectorAll('.filter-checkbox');
const rbItems = document.querySelectorAll('.rb');

filterCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const checkedCategories = [];

    filterCheckboxes.forEach(checkbox => {
      if (checkbox.checked) {
        checkedCategories.push(checkbox.id);
      }
    });

    rbItems.forEach(item => {
      const itemClasses = item.classList;
      let showItem = false;

      checkedCategories.forEach(category => {
        if (
          (itemClasses.contains(category) || 
           (category === 'national' && itemClasses.contains('n')) ||
           (category === 'webradio' && itemClasses.contains('w')) ||
           (category === 'regional' && itemClasses.contains('r'))
          )
        ) {
          showItem = true;
        }
      });

      if (showItem || checkedCategories.length === 0) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

var frameshare = ""
var urlshare = ""

function fullplayer(){
  document.querySelector(".player").style.height = "100%";
  document.querySelector(".player").style.backgroundColor = "var(--player-color)";
  document.querySelector(".fullscreen").style.display = "none";
  document.querySelector(".midscreen").style.display = "block";
  document.body.style.overflow = "hidden";
}
function minplayer(){
  document.querySelector(".player").style.height = "90px";
  document.querySelector(".player").style.backgroundColor = "var(--menu-color)";
  document.querySelector(".midscreen").style.display = "none";
  document.querySelector(".fullscreen").style.display = "block";
  document.body.style.overflow = "visible";
}

function playlist(url){
  document.querySelector(".player").src = "https://tune-radio.github.io/playlist/" + url + "/";
  document.getElementById("frameshare").value = '<iframe src="https://tune-radio.github.io/playlist/' + url + '/?embed=share#/" height="90px" width="420px" style="border-radius: 10px; border: none;"></iframe>'
  document.getElementById("frameprev").src = 'https://tune-radio.github.io/playlist/' + url + '/?embed=share#/';
  document.getElementById("urlshare").value = "https://tune-radio.github.io/?share=" + url;
  document.querySelector(".fa-share-alt").style.display = "block";
  minplayer();
  document.querySelector(".fa-share-alt").style.right = "70px";
}
function playradio(url){
  document.querySelector(".player").src = "https://tune-radio.github.io/radio/" + url + "/";
  document.getElementById("frameshare").value = '<iframe src="https://tune-radio.github.io/radio/' + url + '/?embed=share#/" height="90px" width="420px" style="border-radius: 10px; border: none;"></iframe>'
  document.getElementById("frameprev").src = 'https://tune-radio.github.io/radio/' + url + '/?embed=share#/';
  document.getElementById("urlshare").value = "https://tune-radio.github.io/?share=" + url;
  document.querySelector(".fa-share-alt").style.display = "block";
  minplayer();
  document.querySelector(".fa-share-alt").style.right = "140px";
}

const url = new URL(window.location.href);
var filename = url.searchParams.get("filename");

if (filename === "top" || filename === "pop" || filename === "hiphop" || filename === "rock" || filename === "electro" || filename === "kpop" || filename === "country"){
  playlist(filename);
}else if (filename === null){
}else{
  playradio(filename);
}

function urlcopy(){
  navigator.clipboard.writeText("document.getElementById('urlshare').value");
  alert('Lien copié');
}

// Pages
function homepage(){
  document.querySelector(".settings").style.display = 'none';
  document.querySelector(".addpage").style.display = 'none';
  document.querySelector(".homec").classList.add("select");
}
function addpage(){
  document.querySelector(".settings").style.display = 'none';
  document.querySelector(".addpage").style.display = 'block';
  document.querySelector(".homec").classList.remove("select");
}
function settings(){
  document.querySelector(".settings").style.display = 'block';
  document.querySelector(".addpage").style.display = 'none';
  document.querySelector(".homec").classList.remove("select");
}

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
        
      });
    }
  });
});