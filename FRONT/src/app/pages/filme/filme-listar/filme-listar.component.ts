import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import {
  MatTable,
  MatTableDataSource,
} from "@angular/material/table";
import { Filme } from "src/app/models/filme.model";

@Component({
  selector: "app-filme-listar",
  templateUrl: "./filme-listar.component.html",
  styleUrls: ["./filme-listar.component.css"],
})
export class FilmeListarComponent {
  colunasTabela: string[] = [
    "id",
    "titulo",
    "diretor",
    "anoLancamento",
    "classificacaoEtaria",
    "deletar",
    "alterar",
  ];
  filmes: Filme[] = [];

  constructor(
    private client: HttpClient,
    private snackBar: MatSnackBar
  ) {
    
  }

  ngOnInit(): void {
    this.client
      .get<Filme[]>("https://localhost:7048/api/filmes/listar")
      .subscribe({
        //Requisição com sucesso
        next: (filmes) => {
          console.table(filmes);
          this.filmes = filmes;
        },
        //Requisição com erro
        error: (erro) => {
          console.log(erro);
        },
      });
  }

  deletar(id: number) {
    this.client
      .delete<Filme[]>(
        `https://localhost:7048/api/filmes/deletar/${id}`
      )
      .subscribe({
        //Requisição com sucesso
        next: (filmes) => {
          this.filmes = filmes;
          this.snackBar.open(
            "Filme deletado com sucesso!!",
            "Ok",
            {
              duration: 1500,
              horizontalPosition: "right",
              verticalPosition: "top",
            }
          );
        },
        //Requisição com erro
        error: (erro) => {
          console.log(erro);
        },
      });
  }

}
