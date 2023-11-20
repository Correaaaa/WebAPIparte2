import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import {
  MatTable,
  MatTableDataSource,
} from "@angular/material/table";
import { Emprestimo } from "src/app/models/emprestimo.model";

@Component({
  selector: "app-emprestimo-listar",
  templateUrl: "./emprestimo-listar.component.html",
  styleUrls: ["./emprestimo-listar.component.css"],
})
export class EmprestimoListarComponent {
  colunasTabela: string[] = [
    "id",
    "cliente",
    "filme",
    "dataEmprestimo",
    "dataDevolucao"
  ];
  emprestimos: Emprestimo[] = [];

  constructor(
    private client: HttpClient,
    private snackBar: MatSnackBar
  ) {
    
  }

  ngOnInit(): void {
    this.client
      .get<Emprestimo[]>("https://localhost:7048/api/emprestimos/listar")
      .subscribe({
        //Requisição com sucesso
        next: (emprestimos) => {
          console.table(emprestimos);
          this.emprestimos = emprestimos;
        },
        //Requisição com erro
        error: (erro) => {
          console.log(erro);
        },
      });
  }

  deletar(id: number) {
    this.client
      .delete<Emprestimo[]>(
        `https://localhost:7048/api/emprestimos/deletar/${id}`
      )
      .subscribe({
        //Requisição com sucesso
        next: (emprestimos) => {
          this.emprestimos = emprestimos;
          this.snackBar.open(
            "Emprestimo deletado com sucesso!!",
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
