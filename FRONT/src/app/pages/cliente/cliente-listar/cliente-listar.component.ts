import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import {
  MatTable,
  MatTableDataSource,
} from "@angular/material/table";
import { Cliente } from "src/app/models/cliente.model";

@Component({
  selector: "app-cliente-listar",
  templateUrl: "./cliente-listar.component.html",
  styleUrls: ["./cliente-listar.component.css"],
})
export class ClienteListarComponent {
  colunasTabela: string[] = [
    "id",
    "nome",
    "email",
    "idade",  
    "deletar",
    "alterar",
  ];
  clientes: Cliente[] = [];

  constructor(
    private client: HttpClient,
    private snackBar: MatSnackBar
  ) {
    
  }

  ngOnInit(): void {
    this.client
      .get<Cliente[]>("https://localhost:7048/api/clientes/listar")
      .subscribe({
        //Requisição com sucesso
        next: (clientes) => {
          console.table(clientes);
          this.clientes = clientes;
        },
        //Requisição com erro
        error: (erro) => {
        },
      });
  }

  deletar(id: number) {
    this.client
      .delete<Cliente[]>(
        `https://localhost:7048/api/clientes/deletar/${id}`
      )
      .subscribe({
        //Requisição com sucesso
        next: (clientes) => {
          this.clientes = clientes;
          this.snackBar.open(
            "Cliente deletado com sucesso!!",
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
        },
      });
  }

}
