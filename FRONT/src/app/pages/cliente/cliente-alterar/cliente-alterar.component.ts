import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { Cliente } from "src/app/models/cliente.model";

@Component({
  selector: "app-cliente-alterar",
  templateUrl: "./cliente-alterar.component.html",
  styleUrls: ["./cliente-alterar.component.css"],
})
export class ClienteAlterarComponent {
  id: number = 0;
  nome: string = "";
  email: string = "";
  idade: number | null = null;

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
          .get<Cliente>(
            `https://localhost:7048/api/clientes/buscar/${id}`
          )
          .subscribe({
            next: (cliente) => {
              const { id, nome, email, idade } = cliente;
  
              this.id = id!;
              this.nome = nome;
              this.email = email;
              this.idade = idade;
            },
            error: (erro) => {
              console.log(erro);
              this.snackBar.open(
                "Erro ao buscar cliente. Por favor, tente novamente.",
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
    const cliente: Cliente = {
      nome: this.nome,
      email: this.email,
      idade: this.idade!,
    };

    this.client
      .put<Cliente>(
        `https://localhost:7048/api/clientes/alterar/${this.id}`,
        cliente
      )
      .subscribe({
        next: () => this.onAlterarSuccess(),
        error: (erro) => {
          console.log(erro);
          this.snackBar.open(
            "Erro ao alterar cliente. Por favor, tente novamente.",
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
      "Cliente alterado com sucesso!!",
      "Ok",
      {
        duration: 1500,
        horizontalPosition: "right",
        verticalPosition: "top",
      }
    );
    this.router.navigate(["pages/cliente/listar"]);
  }
}
