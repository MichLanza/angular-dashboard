import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import { BottomSheetOverviewExampleSheet } from './ui/bottom-sheet-overview-example-sheet.component';

@Component({
  selector: 'app-material',
  standalone: true,
  imports: [MatSlideToggleModule, MatButtonModule, MatBadgeModule, MatIconModule,MatBottomSheetModule],
  templateUrl: './material.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class MaterialComponent {

  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet() {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }

}


