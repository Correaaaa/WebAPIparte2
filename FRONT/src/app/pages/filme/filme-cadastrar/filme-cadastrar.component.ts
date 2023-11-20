import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Filme } from "src/app/models/filme.model";

@Component({
  selector: "app-filme-cadastrar",
  templateUrl: "./filme-cadastrar.component.html",
  styleUrls: ["./filme-cadastrar.component.css"],
})
export class FilmeCadastrarComponent {
  titulo: string = "";
  diretor: string = "";
  anoLancamento: number = 0;
  classificacaoEtaria: number = 0;

  constructor(
    private client: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  cadastrar(): void {
    let filme: Filme = {
      titulo: this.titulo,
      diretor: this.diretor,
      anoLancamento: this.anoLancamento,
      classificacaoEtaria: this.classificacaoEtaria,
      
    };

    this.client
      .post<Filme>(
        "https://localhost:7048/api/filmes/cadastrar",
        filme
      )
      .subscribe({
        //A requição funcionou
        next: (filme) => {
          this.snackBar.open(
            "Filme cadastrado com sucesso!!",
            "Voltar",
            {
              duration: 1500,
              horizontalPosition: "right",
              verticalPosition: "top",
            }
          );
          this.router.navigate(["pages/filme/listar"]);
        },
        //A requição não funcionou
        error: (erro) => {
            console.log(erro);
        },
      });
  }
}
