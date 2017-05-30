import { Component } from "@angular/core";

interface Projects {
    title: string,
    thumbnail: string,
    description: string,
    url: string
}

@Component ({
    selector: "pt-projects",
    templateUrl: "./projects.component.html"
})

export class ProjectsComponent {
    projectItems : Projects[] = [{
        title: "Mennonite Insurance Company Web Page",
        thumbnail: "placeholder",
        description: "lorem lorem lorem",
        url: "mennoniteinsurance.com"
    }]
}