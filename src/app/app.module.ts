import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EdenItemsListComponent } from './eden-items-list/eden-items-list.component';
import { EdenItemComponent } from './eden-item/eden-item.component';
import { FavoriteDirective } from './favorite.directive';
import { AreaListPipe } from './area-list.pipe';
import { EdenItemFormComponent } from './eden-item-form/eden-item-form.component';
import { EdenItemsService } from './eden-items.service';

@NgModule({
  declarations: [
    AppComponent,
    EdenItemsListComponent,
    EdenItemComponent,
    FavoriteDirective,
    AreaListPipe,
    EdenItemFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [EdenItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
