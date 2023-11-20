import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { Filme } from "src/app/models/filme.model";

@Component({
  selector: "app-filme-alterar",
  templateUrl: "./filme-alterar.component.html",
  styleUrls: ["./filme-alterar.component.css"],
})
export class FilmeAlterarComponent {
  id: number = 0;
  titulo: string = "";
  diretor: string = "";
  anoLancamento: number | null = null;
  classificacaoEtaria: number | null = null ;

  constructor(
    private client: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (parametros) => {
        let { id } = parametros;
        this.client
          .get<Filme>(
            `https://localhost:7048/api/filmes/buscar/${id}`
          )
          .subscribe({
            next: (filme) => {
              const { id, titulo, diretor, anoLancamento, classificacaoEtaria } = filme;

              this.id = id!;
              this.titulo = titulo;
              this.diretor = diretor;
              this.anoLancamento = anoLancamento;
              this.classificacaoEtaria = classificacaoEtaria;
            },
            error: (erro) => {
              console.log(erro);
              this.snackBar.open(
                "Erro ao buscar filme. Por favor, tente novamente.",
                "Ok",
                {
                  duration: 3000,
                  horizontalPosition: "right",
                  verticalPosition: "top",
                  panelClass: ["snackbar-error"],
                }
              );
            },
          });
      },
    });
  }

  alterar(): void {
    const filme: Filme = {
      titulo: this.titulo,
      diretor: this.diretor,
      anoLancamento: this.anoLancamento!,
      classificacaoEtaria: this.classificacaoEtaria!,
    };

    this.client
      .put<Filme>(
        `https://localhost:7048/api/filmes/alterar/${this.id}`,
        filme
      )
      .subscribe({
        next: () => this.onAlterarSuccess(),
        error: (erro) => {
          console.log(erro);
          this.snackBar.open(
            "Erro ao alterar filme. Por favor, tente novamente.",
            "Ok",
            {
              duration: 3000,
              horizontalPosition: "right",
              verticalPosition: "top",
              panelClass: ["snackbar-error"],
            }
          );
        },
      });
  }

  private onAlterarSuccess(): void {
    this.snackBar.open(
      "Filme alterado com sucesso!!",
      "Ok",
      {
        duration: 1500,
        horizontalPosition: "right",
        verticalPosition: "top",
      }
    );
    this.router.navigate(["pages/filme/listar"]);
  }
}
