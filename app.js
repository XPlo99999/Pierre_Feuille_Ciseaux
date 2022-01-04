function game() {
    // déclaration des variables
    var pierre = document.querySelector('#pierre')
    var feuille = document.querySelector('#feuille')
    var ciseaux = document.querySelector('#ciseaux')

    // l'image du joueur
    var Pimg = document.querySelector('#Pimg')
    // l'image de l'ordi
    var Cimg = document.querySelector('#Cimg')
    // le bouton reset
    var reset = document.querySelector("#reset")

    var PscoreSpan = document.querySelector('#Pscore')
    var CscoreSpan = document.querySelector('#Cscore')
    // initialisation des score à zero
    var pScore = 0
    var cScore = 0

    var images_option = ['pierre','feuille','ciseaux']


    // les fonctions d'affichage du choix utilisateur et ordinateur

    // choix utilisateur, i c'est pour le tableau,
    // il choisir la valeur qu'il va prendre pour récupérer la bonne image 
    var Pchoice = function(i){
        Pimg.src = 'img/'+images_option[i]+'.jpg'
        Pimg.value = images_option[i]
        compareHands()
    }

    //choix Ordinateur
    var Cchoice = function(i){
        Cimg.src = 'img/'+images_option[i]+'.jpg'
        Cimg.value = images_option[i]
    }

    // les evenements du clic pour la selection de l'utilisateur
    pierre.addEventListener('click', function(){
        //choisi pour l'ordi une des trois possibilités
        // renvoie le plus grand entier qui est inférieur ou égal à un nombre x
        Cchoice(Math.floor(Math.random() * 3))
        // utilisatation de la fonction Pchoice pour dire quel
        // valeur à séléctionné le joueur
        Pchoice(0)
    })

    feuille.addEventListener('click', function(){
        Cchoice(Math.floor(Math.random() * 3))
        Pchoice(1)
    })
    ciseaux.addEventListener('click', function(){
        Cchoice(Math.floor(Math.random() * 3))
        Pchoice(2)
    })

    // compare les mains des deux pour calculer qui gagne
    var compareHands = () =>{
        // si le joueur à choisi pierre
        if(Pimg.value == 'pierre'){
            // si l'ordi a choisi la feuille
            if(Cimg.value == 'feuille'){
                // ordi +1 point
                cScore += 1
            }
            // sinon si l'ordi a choisi ciseaux
            else if(Cimg.value == 'ciseaux'){
                // joueur +1 point
                pScore += 1
            }
            // sinon égalité donc rien ne se passe
            else if(Cimg.value == 'pierre'){
            }
        }
        // même logique pour les autres choix
        else if(Pimg.value == 'ciseaux'){
            if(Cimg.value == 'pierre'){
                cScore += 1
            }
            else if(Cimg.value == 'feuille'){
                pScore += 1
            }
            else if(Cimg.value == 'ciseaux'){
                
            }
        }
        if(Pimg.value == 'feuille'){
            if(Cimg.value == 'ciseaux'){
                cScore += 1
            }
            else if(Cimg.value == 'pierre'){
                pScore += 1
            }
            else if(Cimg.value == 'feuille'){
                
            }
        }
        // recupère et afficher les scores dans les span
        function affichageScore() {
            PscoreSpan.textContent = pScore
            CscoreSpan.textContent = cScore
            
        }
        affichageScore()
        reset.addEventListener('click', function(){
            pScore = 0
            cScore = 0
            Pchoice(-1)
            Cchoice(-1)
            affichageScore()
        })
    }
}

function soundgame() {
    var x = document.getElementById("myAudio"); 
    var play = document.querySelector("#play")
    var pause = document.querySelector("#pause")

    play.addEventListener('click', function(){
    x.play()
    })

    pause.addEventListener('click', function(){ 
    x.pause()
    })
}

function power() {
    var body = document.querySelector("body")
    var h1 = document.querySelector("h1")
    var p = document.querySelector("#container_header")
    var nuit = document.querySelector("#dark")
    var jour = document.querySelector("#light")

    nuit.addEventListener('click', function(){
    body.style.backgroundColor = "#222222"
    body.style.transition =".5s"
    h1.style.color = "#fff"
    h1.style.transition =".5s"
    p.style.color = "#fff"
    p.style.transition =".5s"
    })

    jour.addEventListener('click', function(){ 
    body.style.backgroundColor = "#fff"
    body.style.transition =".5s"
    h1.style.color = "#000"
    h1.style.transition =".5s"
    p.style.color = "#000"
    p.style.transition =".5s"
    })
}

game()
soundgame()
power()
