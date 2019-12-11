import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { TextField } from 'tns-core-modules/ui/text-field';
import { EventData } from "tns-core-modules/data/observable";
import { TextView } from "tns-core-modules/ui/text-view";
import { RadListView, ListViewReorderMode } from 'nativescript-ui-listview';
import { ListView } from 'tns-core-modules/ui/list-view';
import { Page } from 'tns-core-modules/ui/page/page';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout/stack-layout';
import { ScrollView } from 'tns-core-modules/ui/scroll-view';

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
    solicitacao
    ngOnInit() {
        console.log('ng on init chattttt');

        this.router.params.subscribe(params => {
            let text = params['id']
        });
        this.solicitacao = "Solicitação "
        this.router.queryParams.subscribe(params => {
            this.solicitacao += params['soli']
        })

        this.chats$ = new Observable(ob => {
            let lista = []

            for (let index = 0; index <= 5; index++) {
                let t
                if (index % 2 == 0) {

                    t = new SolUnidade('Minha mensagem ' + index + " orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation", 15, index, 'me');
                }
                else {
                    t = new SolUnidade('Resposta mensagem '
                        + index
                        + " ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur", 15, index, 'them');
                }
                lista.push(t)
            }
            //this.scroll(lista.length)
            ob.next(lista)
        });
    }


    @ViewChild("list", { static: true }) lv: ElementRef;
    @ViewChild("textfield", { static: true }) tf: ElementRef;

    list: ListView;
    textfield: TextField;

    public ngAfterViewInit() {
        this.list = this.lv.nativeElement;
        this.textfield = this.tf.nativeElement;
        this.chats$.subscribe(r => {
            console.log('after init');

            this.scroll(r.length)

        })
    }



    scroll(count: number) {
        console.log("scrolling to ", count)
        let listView: RadListView = <RadListView>(this.lv.nativeElement);
        //console.log('listview', listView.items);
        //  console.log('is loaded', listView.isLoaded);
       // let t = listView.getItemAtIndex(5)
        //  console.log('ind', listView.getItemAtIndex(5));
        //  console.log('ind', listView.scrollToIndex(t));
        // console.log(listView.order);





console.log(listView);



       listView.scrollToIndex(5);

        //this.list.scrollToIndex(5);
        //this.list.scrollWithAmount(600, true);
        //this.list.refresh();
    }

    message: string
    onTextChange(args: EventData) {
        const tv = args.object as TextView;
       // console.log(tv.text);
        this.message = tv.text
    }
    chat(mess: string) {
        console.log('on chat')
        //console.log('message,', this.message);

        let lista = []
        this.chats$.subscribe(cha => {

            //console.log(cha);

            let sol = new SolUnidade(this.message,
                405, 15, 'me')
            cha.push(sol)
            let count = cha.length;
            this.scroll(count);
            lista = cha

        })
        this.chats$ = new Observable(ob => {
            ob.next(lista)
        })

        this.textfield.text = '';
    }

    filter(sender: SolUnidade) {
        return sender.autor
    }

    align(sender: SolUnidade) {
        if (sender.autor == 'me') {
            return "right"
        }
        else {
            return "left"
        }
    }

    goBack() {
        console.log('baaaack111');
        //console.log(this.routerExtensions.canGoBack());
        //this.router.
        this.routerExtensions.back();
    }




page: Page;
scrol: ScrollView;
stack: StackLayout
teste(args: EventData){
    console.log('tetseeeeeeeeeeeeeeeeee');
    
    this.page = <Page> args.object;
    this.scrol = this.page.getViewById("scroll") as ScrollView
    console.log('page', this.page);
    console.log('scr', this.scrol);
    
    
    this.scrol.scrollToVerticalOffset(this.scrol.scrollableHeight, true)
}



}
export class SolUnidade {
    constructor(
        public soli: string,
        public unidade,
        public id,
        public autor) { }
}