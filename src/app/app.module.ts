import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GenericLayoutComponent } from './pages/generic-layout/generic-layout.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, GenericLayoutComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
