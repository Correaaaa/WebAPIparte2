import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBarModule } from "@angular/material/snack-bar";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ClienteListarComponent } from "./pages/cliente/cliente-listar/cliente-listar.component";
import { ClienteCadastrarComponent } from "./pages/cliente/cliente-cadastrar/cliente-cadastrar.component";
import { ClienteAlterarComponent } from "./pages/cliente/cliente-alterar/cliente-alterar.component";
import { FilmeListarComponent } from "./pages/filme/filme-listar/filme-listar.component";
import { FilmeCadastrarComponent } from "./pages/filme/filme-cadastrar/filme-cadastrar.component";
import { FilmeAlterarComponent } from "./pages/filme/filme-alterar/filme-alterar.component";
import { EmprestimoListarComponent } from "./pages/emprestimo/emprestimo-listar/emprestimo-listar.component";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    ClienteListarComponent,
    ClienteCadastrarComponent,
    ClienteAlterarComponent,
    FilmeListarComponent,
    FilmeCadastrarComponent,
    FilmeAlterarComponent,
    EmprestimoListarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
