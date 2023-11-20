import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClienteListarComponent } from "./pages/cliente/cliente-listar/cliente-listar.component";
import { ClienteCadastrarComponent } from "./pages/cliente/cliente-cadastrar/cliente-cadastrar.component";
import { ClienteAlterarComponent } from "./pages/cliente/cliente-alterar/cliente-alterar.component";
import { FilmeListarComponent } from "./pages/filme/filme-listar/filme-listar.component";
import { FilmeCadastrarComponent } from "./pages/filme/filme-cadastrar/filme-cadastrar.component";
import { FilmeAlterarComponent } from "./pages/filme/filme-alterar/filme-alterar.component";
import { EmprestimoListarComponent } from "./pages/emprestimo/emprestimo-listar/emprestimo-listar.component";

const routes: Routes = [
  {
    path: "",
    component: FilmeListarComponent,
  },
  {
    path: "pages/clientes/listar",
    component: ClienteListarComponent,
  },
  {
    path: "pages/clientes/cadastrar",
    component: ClienteCadastrarComponent,
  },
  {
    path: "pages/clientes/alterar/:id",
    component: ClienteAlterarComponent,
  },
  {
    path: "pages/filmes/listar",
    component: FilmeListarComponent,
  },
  {
    path: "pages/filmes/cadastrar",
    component: FilmeCadastrarComponent,
  },
  {
    path: "pages/filmes/alterar/:id",
    component: FilmeAlterarComponent,
  },
  {
    path: "pages/emprestimos/listar",
    component: EmprestimoListarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
