import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';
 import { Observable } from 'rxjs';


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
	public chats$: Observable<any>;
	ngOnInit() {
		console.log('ng on init chatttttttttttttttttt');
		this.router.params.subscribe(params => {
			//console.log(params);			
			let text = params['id']
			console.log('id', text);

		});
		this.router.queryParams.subscribe(params => {
			let soli = params['soli']
			console.log('solicitacao ', soli);
		})
		
		this.chats$ = new Observable(ob =>{
			let lista = ['asd', 'sdasds', '22234234']
		});

		this.chats$.subscribe(r =>{
			console.log(r);
			
		})
		


		
	}
	
    /* public ngAfterViewInit() {
        this.list = this.lv.nativeElement;
        this.textfield = this.tf.nativeElement;
    }

    scroll(count:number){
       console.log("scrolling to ", count)
       this.list.scrollToIndex(count-1);
       this.list.refresh();
    }

    chat(message: string) {
        this.firebaseService.chat(message).then((data: any) => {
            let count = this.list.items.length;
            this.scroll(count);
        });
        this.textfield.text = '';        
    }

    filter(sender) {
        if (sender == BackendService.token) {
            return "me"
        }
        else {
            return "them"
        }
    }

    align(sender) {
        if (sender == BackendService.token) {
            return "right"
        }
        else {
            return "left"
        }
    } */

}
