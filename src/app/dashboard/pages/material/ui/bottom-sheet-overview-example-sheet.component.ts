import { Component } from "@angular/core";
import { MatBottomSheetRef } from "@angular/material/bottom-sheet";
import { MatListModule } from '@angular/material/list';
@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
  standalone: true,
  imports: [MatListModule],
})
export class BottomSheetOverviewExampleSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) { }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
  // event.preventDefault();
  }
}
