using Microsoft.EntityFrameworkCore;
using Locadora.Data;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<LocadoraDbContext>(
    options => options.UseSqlite("Data Source=locadora.db")
);

builder.Services.AddControllers();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{

}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors
(
    c => c.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()
);

app.MapControllers();

app.Run();