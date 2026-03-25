const bouton = document.querySelector('.button')

const badges = document.querySelectorAll('.badge')

badges.forEach(function(badge) {
  badge.addEventListener('click', function() {
    badge.classList.toggle('active')
  })
})

bouton.addEventListener('click', async function() {

  const badgesActifs = []
badges.forEach(function(badge) {
  if (badge.classList.contains('active')) {
    badgesActifs.push(badge.innerText)
  }
})

const themes = badgesActifs.length > 0 ? badgesActifs.join(', ') : 'magique'

  const animaux = ['un lapin', 'un renard', 'un ourson', 'une grenouille', 'un écureuil', 'une chouette', 'un hérisson', 'un canard']
const lieux = ['dans une forêt enchantée', 'au bord d\'un lac argenté', 'dans un jardin magique', 'sur une colline de fleurs', 'dans un vieux moulin hanté par des fées']
const situations = ['qui ne savait pas partager', 'qui avait peur du noir', 'qui se sentait très seul', 'qui voulait voler comme un oiseau', 'qui avait perdu quelque chose de précieux']

const animal = animaux[Math.floor(Math.random() * animaux.length)]
const lieu = lieux[Math.floor(Math.random() * lieux.length)]
const situation = situations[Math.floor(Math.random() * situations.length)]

  document.getElementById('story-text').innerText = '✨ La magie est en train d\'opérer...'

   const response = await fetch('/histoire', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: `Raconte une histoire très courte pour enfant de 0 à 4 ans.
Contraintes essentielles :
- Utilise des phrases très courtes (5 à 10 mots maximum)
- Utilise des mots simples et familiers
- Ton doux, calme et rassurant
- Aucune complexité ou élément effrayant
Personnage principal :
- Un animal mignon : ${animal}
Contexte :
- Situation simple : ${situation}
- Lieu facile à imaginer : ${lieu}
Structure :
1. Présentation du personnage (1 à 2 phrases)
2. Petit événement très simple
3. Résolution immédiate et positive
4. Fin rassurante
Thèmes à intégrer : ${themes}
Règles importantes :
- Répète un mot ou une phrase 2 à 3 fois (effet berceuse)
- Ajoute des sons simples (ex : "plouf", "toc toc", "dodo")
- Utilise des images simples (couleurs, soleil, nuit, câlin)
Fin : Termine par une phrase apaisante.
Objectif : Créer une mini histoire qui apaise et capte l attention d un tout-petit, comme une berceuse.` })
    })

  const data = await response.json()
  document.getElementById('story-text').innerText = data.content[0].text

})