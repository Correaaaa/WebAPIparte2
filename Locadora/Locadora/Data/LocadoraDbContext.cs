using Locadora.Models;
using Microsoft.EntityFrameworkCore;

namespace Locadora.Data;

public class LocadoraDbContext : DbContext
{
    public LocadoraDbContext(DbContextOptions<LocadoraDbContext> options) : base(options)
    {
    }

    public DbSet<Cliente> Clientes { get; set; }
    public DbSet<Filme> Filmes { get; set; }
    public DbSet<Emprestimo> Emprestimos { get; set; }

}
