import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, TitleComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent,TitleComponent]
})
export class CoreModule {}
