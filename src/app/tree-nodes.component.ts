import { Component,Input } from "@angular/core";
import { Contact } from "./contact";

@Component({
    selector: 'tree-node',
    templateUrl: 'tree-nodes.html',
    moduleId: module.id
})
export class TreeNodeComponent {

    @Input()
    private contact: Contact;

    private clicked :boolean = false;

}
