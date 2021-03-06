import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SharedModule } from "./shared";
import { AppRoutingModule } from "./app-routing.module";
import { HomeModule } from "./home";
// 指令是不带模板的component
// 注解是对属性的变法  getter  setter
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, AppRoutingModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
