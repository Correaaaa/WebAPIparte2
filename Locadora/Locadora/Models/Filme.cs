namespace Locadora.Models;
public class Filme
{
    public int Id { get; set; }
    public string? Titulo { get; set; }
    public string? Diretor { get; set; }
    public int AnoLancamento { get; set; }
    public int ClassificacaoEtaria { get; set; } 
    
}