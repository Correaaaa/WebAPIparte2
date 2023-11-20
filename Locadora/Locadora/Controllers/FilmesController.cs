using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Locadora.Models;
using Locadora.Data;

namespace Locadora.Controllers
{
    [ApiController]
    [Route("api/filmes")]
    
    public class FilmesController : ControllerBase
    {
        private readonly LocadoraDbContext _context;

        public FilmesController(LocadoraDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("listar")]
        public async Task<ActionResult<IEnumerable<Filme>>> GetFilmes()
        {
            return await _context.Filmes.ToListAsync();
        }

        [HttpGet]
        [Route("buscar/{id}")]
        public async Task<ActionResult<Filme>> GetFilme(int id)
        {
            var filme = await _context.Filmes.FindAsync(id);

            if (filme == null)
            {
                return NotFound();
            }

            return filme;
        }

        [HttpPost]
        [Route("cadastrar")]        
        public async Task<ActionResult<Filme>> PostFilme(Filme filme)
        {
            _context.Filmes.Add(filme);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFilme", new { id = filme.Id }, filme);
        }

        [HttpPut]
        [Route("alterar/{id}")]
        public async Task<IActionResult> PutFilme(int id, [FromBody] Filme novoFilme)
        {
            var filme = await _context.Filmes.FindAsync(id);

            if (filme == null)
            {
                return NotFound();
            }

            filme.Titulo = novoFilme.Titulo;
            filme.Diretor = novoFilme.Diretor;
            filme.AnoLancamento = novoFilme.AnoLancamento;
            filme.ClassificacaoEtaria = novoFilme.ClassificacaoEtaria;

            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete]
        [Route("deletar/{id}")]
        public async Task<IActionResult> DeleteFilme(int id)
        {
            var filme = await _context.Filmes.FindAsync(id);
            if (filme == null)
            {
                return NotFound();
            }

            _context.Filmes.Remove(filme);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FilmeExists(int id)
        {
            return _context.Filmes.Any(e => e.Id == id);
        }
    }
}
