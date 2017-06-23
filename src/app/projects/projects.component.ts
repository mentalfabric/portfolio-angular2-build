import { Component, Input, OnInit } from "@angular/core";
import { fadeInAnimation } from "../_animations/fade-in.animation";

interface Projects {
    title: string,
    thumbnail: string,
    description: string,
    url: string
}

@Component ({
    selector: "pt-projects",
    templateUrl: "./projects.component.html",
    animations: fadeInAnimation
})

export class ProjectsComponent {
    public state : string;

    projectItems : Projects[] = [{
        title: "Mennonite Insurance Company Web Page",
        thumbnail: "placeholder",
        description: "lorem lorem lorem",
        url: "mennoniteinsurance.com"
    }]

    ngOnInit() {
        this.state = "init"
        setTimeout(() => this.state = "loaded", 0)
    }
}