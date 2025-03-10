import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule , TitleComponent],
  template: `
    <app-title title="View Transition 2" />
    <section class="flex justify-end">

    <img
      srcset= "https://picsum.photos/id/237/250"
      alt="perrito"
      width="200"
      height="300"
      style="view-transition-name : hero1"
    />
    <div
    class="bg-blue-800 w-32 h-32 rounded fixed bottom-16 right-10"
    style="view-transition-name : hero2"
    ></div>
    </section>
  `,

})

export default class ViewTransition2Component {

}
