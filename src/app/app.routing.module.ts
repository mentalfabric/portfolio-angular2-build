import { NgModule } from "@angular/core";
import { RouterModule, Routes, Route } from "@angular/router";

import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ProjectsComponent } from "./projects/projects.component";

const routes:Routes = [
    {
        path: "about",
        component: AboutComponent
    },
    {
        path:"contact",
        component: ContactComponent
    },
    {
        path:"projects",
        component: ProjectsComponent
    },
    {
        path: "",
        component: AboutComponent
    },
    {
        path: "**",
        pathMatch: "full",
        redirectTo: ""
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}

export const routedComponents = [
    AboutComponent,
    ContactComponent,
    ProjectsComponent
]