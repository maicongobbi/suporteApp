import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { EventData } from 'tns-core-modules/ui/page/page';
import { TextView } from 'tns-core-modules/ui/text-view/text-view';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'app-buscar',
    templateUrl: './buscar.component.html',
    styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {

    idBuscado = "";    

    constructor(
        private routerExtensions: RouterExtensions,
        private http: HttpClient
    ) { }

    ngOnInit(): void { }

    goBack() {
        console.log('baaaack111');
        console.log(this.routerExtensions.canGoBack());
        //this.router.
        this.routerExtensions.back();
    }

    onTextChange(args: EventData) {
        const tv = args.object as TextView;       
        this.idBuscado = tv.text
    }

    buscar() {       
        console.log('on buscar', this.idBuscado)
        this.findById(+this.idBuscado).subscribe(r =>{
            console.log(r);
            //console.log(r.id);
            
        })
    }
    findById(id: number): Observable<Response> {
        return new Observable(ob =>{
            this.http.get("http://sistemas.bombeiros.ms.gov.br/ws-suporte/901").subscribe(
               
            )

        })        
    }


}
