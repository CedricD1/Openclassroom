import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Activité 1 ANGULAR : mon Blog';

	tabPosts = [
		{
			title: "Mon premier Post",
		  	content: "Voilà, j'apprends à utiliser le FrameWork ANGULAR.\
		  	 À première vue ça n'a pas l'air très facile mais je suppose qu'avec de\
		  	  l'entrainement ça facilitera le developpement de projets complexes!",
		  	loveIts: 0,
		  	created_at: Date()
		},
		{
			title: "Mon deuxième Post",
		  	content: "Voilà, après avoir bien buté j'ai réussi à structurer correctement mon\
		  	 code pour afficher ce tableau dans le component souhaité.\
		  	  Maintenant on peut passer à l'étape des fonctions de like !",
		  	loveIts: 0,
		  	created_at: Date()
		},
		{
			title: "A propos de Bootstrap",
		  	content: "Finalement le fonctionnement global de l'App est là ! Maintenant je vais\
		  	 essayer de comprendre un peu mieux le fonctionnement de Bootstrap pour améliorer la présentation !",
		  	loveIts: 0,
		  	created_at: Date()
		},
		{
			title: "Finalement",
		  	content: "Après pas mal d'essais j'ai obtenu un résultat convenable.\
		  	 Cependant je n'ai pas su mettre la date à droite proprement car il\
		  	  restait des problèmes d'alignements que je n'ai pas su resoudre avec bootstrap...\
		  	  Si une personne a une solution je suis preneur !",
		  	loveIts: 0,
		  	created_at: Date()
		}
	];
}