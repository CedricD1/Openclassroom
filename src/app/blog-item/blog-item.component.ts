import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {

	dateMaj = new Date();

	@Input() titrePost: "string";
	@Input() contenuPost: "string";
	@Input() loveItsPost: "numeric";
	@Input() datePost: date;

  constructor() { }

  ngOnInit() { }

  love()
  {
  	this.loveItsPost +=1;
  }

  dontLove()
  {
  	this.loveItsPost -=1;
  }

}
