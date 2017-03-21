import { Component } from "@angular/core";
import { Contact } from "./contact";
import { TreeService } from "./tree.service";

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    moduleId: module.id
})
export class TreeAppComponent {

    private contacts: Contact[];

    constructor(treeService: TreeService) {

        this.contacts = treeService.getTree();
    }

}