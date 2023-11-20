import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Cliente } from "src/app/models/cliente.model";

@Component({
  selector: "app-cliente-cadastrar",
  templateUrl: "./cliente-cadastrar.component.html",
  styleUrls: ["./cliente-cadastrar.component.css"],
})
export class ClienteCadastrarComponent {
  nome: string = "";
  email: string = "";
  idade: number = 0;

  constructor(
    private client: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  cadastrar(): void {
    let cliente: Cliente = {
      nome: this.nome,
      email: this.email,
      idade: this.idade,
      
    };

    this.client
      .post<Cliente>(
        "https://localhost:7048/api/clientes/cadastrar",
        cliente
      )
      .subscribe({
        //A requição funcionou
        next: (cliente) => {
          this.snackBar.open(
            "Cliente cadastrado com sucesso!!",
            "Voltar",
            {
              duration: 1500,
              horizontalPosition: "right",
              verticalPosition: "top",
            }
          );
          this.router.navigate(["pages/cliente/listar"]);
        },
        //A requição não funcionou
        error: (erro) => {
          console.log(erro);
        },
      });
  }
}
