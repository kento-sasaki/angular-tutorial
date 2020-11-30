import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  constructor(private heroService: HeroService, private messageService: MessageService) { }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }


  // getHeroes() はコンストラクターでも呼び出すことはできますが、これは最適な方法ではありません。
  // コンストラクターではプロパティ定義などの簡単な初期化のみを行い、それ以外は 何もするべきではありません。
  // もちろん、実際の データ取得サービスが行うであろう、サーバーへのHTTPリクエストを行う関数は呼び出すべきではありません。
  // getHeroes() はコンストラクターではなく、 ngOnInit ライフサイクルフック 内で呼び出しましょう。
  // この ngOnInit() は、 Angular が HeroesComponent インスタンスを生成した後、適切なタイミングで呼び出されます。
  ngOnInit(): void {
    this.getHeroes()
  }

}
