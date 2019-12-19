import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { MainComponent } from './main/main.component';
import { ConclusionComponent } from './conclusion/conclusion.component';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { ParentComponent } from './parent/parent.component';


const routes: Routes = [
  { path: "intro",component : IntroductionComponent  },
  { path: "main",component : MainComponent  },
  { path: "conc",component : ConclusionComponent  },
  { path: "dir",component : DirectivesComponent  },
  { path: "interact",component : ParentComponent  },
  { path: "*",component : AppComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
