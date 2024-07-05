import { Product } from '@interfaces/product';
import { ChangeDetectionStrategy, Component, effect, EventEmitter, input, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {
  // @Input( {required : true} )
  //product! :Product; OLD
  public product = input.required<Product>();

  // @Output()
  // public onIncrementQuantity = new EventEmitter<number>(); //OLD

  public onIncrementQuantity = output<number>();

  public incrementQuantity(): void {
    this.onIncrementQuantity.emit(this.product().quantity + 1);
  }
  public logginEffect = effect(() => {
    console.log(   this.product().name);
  })
}
