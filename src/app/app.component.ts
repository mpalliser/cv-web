import { Component } from '@angular/core';
import { trigger, transition, style, query, animate, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimation', [
        transition('1 => *, 2 => 3, 2 => 4, 2 => 5, 2 => 6, 3 => 4, 3 => 5, 3 => 6, 4 => 5, 4 => 6, 5 => 6', [
            style({ height: '!' }),
            query(':enter', style({ transform: 'translateX(100%)' })),
            query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 })),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)' }),
                    animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
            ]),
        ]),
        transition('6 => *, 5 => 4, 5 => 3, 5 => 2, 5 => 1, 4 => 3, 4 => 2, 4 => 1, 3 => 2, 3 => 1, 2 => 1', [
            style({ height: '!' }),
            query(':enter', style({ transform: 'translateX(-100%)' })),
            query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 })),
            group([
                query(':leave', [
                    animate('0.5s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(100%)' })),
                ]),
                query(':enter', animate('0.5s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
            ]),
        ]),
    ])
]
})
export class AppComponent {
  title = 'app';

  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
}
}
