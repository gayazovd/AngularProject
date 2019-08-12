import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { TitleComponent } from './title/title.component';
import { DeletePopupComponent } from './delete-popup/delete-popup.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, TitleComponent, DeletePopupComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, TitleComponent, DeletePopupComponent]
})
export class SharedModule { }
