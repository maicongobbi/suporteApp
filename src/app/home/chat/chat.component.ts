import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

	constructor(
		private routerExtensions: RouterExtensions,
		private router: ActivatedRoute,
	) { }

	ngOnInit() {
		console.log('ng on init chatttttttttttttttttt');
		this.router.params.subscribe(params => {
			//console.log(params);			
			let text = params['id']
			console.log('id', text);

		});
		this.router.queryParams.subscribe(params => {
			let soli = params['soli']
			console.log('soli', soli);
		})


		/* this.chatService.getList().subscribe((res) => {
			this.chat = res;
		}); */
	}

}
