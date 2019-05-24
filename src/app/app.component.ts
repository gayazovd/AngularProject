import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public coursesItems: any[] = [
        { id: 1, itemsQuantity: 3 },
        { id: 2, itemsQuantity: 1 },
        { id: 3, itemsQuantity: 2 },
        { id: 4, itemsQuantity: 4 }
    ];
    title = 'Courses-angular';
}
