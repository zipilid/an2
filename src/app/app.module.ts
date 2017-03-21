import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { TreeAppComponent } from "./app.component";
import { TreeNodeComponent } from "./tree-nodes.component";
import { TreeService } from "./tree.service";

@NgModule({
    imports: [BrowserModule,FormsModule],
    declarations: [TreeAppComponent,TreeNodeComponent],
    providers: [TreeService],
    bootstrap: [TreeAppComponent]
})
export class AppModule {

}