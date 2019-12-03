import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { android as androidApp, ios as iosApp, android, AndroidApplication } from "tns-core-modules/application";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  constructor( private router: ActivatedRoute,
    private routerExtensions: RouterExtensions,
    private router1: Router,
    private changeDetect: ChangeDetectorRef
) { } solicitacoes = []
  unidades = []
  autor = []

  ngOnInit() {
    this.solicitacoes.push('Formatar Computador do gabinete pq está '
      + 'desligando sozinho',
      "Alterar senha de rede do meu usuário",
      'Edoc - colocar o sgt como elaborador',
      "Cautela Vtr para viagem",
      "Alteração de serviço do dia 25 por conta de falta de luz")
      ;
    this.unidades.push('DAT',
      'DTEL',
      'AG',
      'BM-1',
      'SAT/1GBM');

    this.autor.push('CB BM GOBBI',
      'TC Fulano',
      'Major Ciclano',
      '5 GBM',
      'CEL Fulano');

    this.items = new Array<SolUnidade>();
    for (let i = 0; i < 5; i++) {
      this.items.push(new SolUnidade(this.solicitacoes[i],
        this.unidades[i],
        (100 * i) + 30,
        this.autor[i]
      ));
    }
   /*  if (androidApp) {
      console.log('andoird');
      androidApp.on(
        AndroidApplication.activityBackPressedEvent,
        (arg: any) => {
          console.log(this.tabSelecionada);
          if (this.tabSelecionada == 0) {
            console.log('voltou');
            this.tabSelecionada = 0
            this.changeDetect.detectChanges() //informa o ng para reexecutar
            arg.cancel = true;
          }
          else {
            console.log('voltou11');
            this.tabSelecionada = 0
            // this.changeDetect.detectChanges() //informa o ng para reexecutar           

            //  arg.cancel = true;
          }
          console.log('nback depois estudar melhor esse back');
        })
    } */


  }
  public tabSelecionada = 1
  public items: Array<SolUnidade>;
  public tabSelectedIndex: number;
  public redirecionar(event) {
    console.log(event.index+'id do' );
    console.log(this.items[event.index].id);
    let soli: SolUnidade = this.items[event.index]

    let navigationsExtras: NavigationExtras = {
      queryParams: {
        soli: soli.id
      }
    }
      console.log("soli ", this.items[event.index]);
      //console.log("soli2222 ", event);

    this.routerExtensions.navigate([
      'chat',
      soli.id
    ], navigationsExtras)
  }

}
export class SolUnidade {
  constructor(
    public soli: string,
    public unidade,
    public id,
    public autor) { }
  }